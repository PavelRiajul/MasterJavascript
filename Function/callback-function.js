//callback function    //higher order function
//callback function holo amon akta function je function arekta function a argument hishabe pathano hoy.
//Example:
// function myFunc2(){
//     console.log('hello')
// }
// function myFunc(a){
//     a()
// }
// myFunc(myFunc2)



// function myFunc(a){
//     console.log(a)
//     console.log('hello world')
// }
//myFunc([2,3,4,5]) //array pass
//myFunc('abdcd') //string pass
//myFunc({name:'Riajul'}) //obj pass


// function myFunc2(){
//     console.log('inside my func 2')
// }
// function myFunc(a){
//     console.log(a)
// }
// myFunc(myFunc2)   //pora myFunc2 return kore debe myFunc er bitore



// function myFunc2(name){
//     console.log('inside my func 2')
//     console.log(`your name is ${name}`)
// }
// function myFunc(callback){
//     console.log('hello there I am a func and I can...')
//     callback()  //callback function ke  call korlam
// }
// myFunc(myFunc2)  


//function theke function return
// function welcome(name){
//     console.log(`welcome Mr.`+name)
//     return function options(menu){
//         console.log(`Do you like`+menu+`Mr.`+name)
//     }
// }
// welcome('Riajul islam')('coffe')



//function ke variable hishab a store kora
// var func = function(name){
//    console.log(`I am simply a function and my name is`+ name)
// }
// var anotherfunc = func;
// anotherfunc('Riajul islam')




// const isEven = (n)=>{
//     return n % 2==0;
// }

// let printMsg = (evenFunc,num)=>{
//     const isNumEven = evenFunc(num)
//     console.log(`The number ${num} is an even number:`)
// }
// printMsg(isEven,4)