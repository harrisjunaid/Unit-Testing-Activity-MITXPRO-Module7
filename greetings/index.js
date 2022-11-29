function greet(name){
    if(name===undefined||name===''){
        console.log(`CONDITION:\tname===null`);                 //PRINT CASE LOG

        return `Hello there!`;
    } 
    if(name!=null){
        console.log(`CONDITOIN:\tname!=null`);                  //PRINT CASE LOG

        if(Array.isArray(name)){                                //Array Check
            console.log(`CONDITOIN:\tArray.isArray(name)`);     //PRINT CASE LOG

            let nameList = '';
            let nameLen = name.length;
            name.forEach((item, index)=>{console.log(`item:\t${item}\tindex:\t${index}\tnameLen-1:\t${nameLen-1}`);
                if(!(nameLen-1==0||index<nameLen-1)){console.log(`CONDITON:\t!(nameLen-1==0||index<nameLen-1)`);
                 nameList +=' ' + item ;
                }
                else{
                nameList += ' ' + item + ','; 
                }
            });
            return `Hello,${nameList}`;
        }
        else {
         if(name.toUpperCase()==name){           //UPPERCASE CHECK
            console.log('CONDITION:\tname.toUpperCase()==name');

            return `HELLO ${name}!`;
           }
        return `Hello, ${name}!`;
        }
    }
}
export {greet};

console.log('....................');
console.log(greet('Elizabeth'));

console.log('....................');
console.log(greet());

console.log('....................');
console.log(greet('JOSE'));

console.log('....................');
console.log(greet(['Jose', 'Pep']));

console.log('....................');
console.log(greet(['Alex', 'Arsene', 'Jose', 'Zidane']));