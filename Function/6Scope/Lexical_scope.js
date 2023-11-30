//Lexical scope
//akta parent function er sathe akta childfunction er somporko add kore
//parent function holo akta function er betire arekta function declare kora
//and parent function er betore declarekora jekono function perant function er child function
//example:- myApp --> parentfunction   and  myFunc  --> childfinction
// function myApp(){
//     function myFunc(){}  
// }
//parentfunction holo Global function and childfunction holo parentfunction er local function/local scope.
//kono function er betore declare kora variable,object,function local scope pai.aderke sodu function er berore access kora jai.

//kinto Lexical scope er karone  parentfunction er bitore access kora jabee sathe childfunction a access kora jabe

// function myApp(){
//     const myVar = 'value1';
//     function myFunc(){
//         const myVar = 'value45'
//         console.log('inside myFunc',myVar)
//     }
//     console.log(myVar)
//     myFunc()
// }
// myApp()



//lexcical scope chaining
    //  myVar first a myFunc a check korbe na paile lexcicalscope myApp check kore myVar ase kina na paile global scope function er bahere check korbe myvar ase kina

// const myVar = 'value1';
// function myApp(){
//     function myFunc(){
//         console.log('inside myFunc',myVar)
//     }
//     console.log(myVar)
//     myFunc()
// }
// myApp()



// const myVar = 'value1';
// function myApp(){
//     function myFunc(){
//         const myFunc2 =()=>{
//             console.log('inside myFunc',myVar)
//         }
//         myFunc2()
//     }
//     console.log(myVar)
//     myFunc()
// }
// myApp()

//myVar first a myFunc2 dekhbe myVar ase kina na paile tarpor myFunc check na paile myApp check na paile global scope mane function er bahere check


//child function access
// function parentfunc(){
//     var a = 6;
//     function childfun(){
//         var b = 4;
//         console.log('sum', (a+b))
//     }
//     childfun()
// }
// parentfunc()