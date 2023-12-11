//what is prototype
//prototype simple object
// only function provide prototype property
//prototype khali object{} ka treat kore .khali obj a jekno kiso ad korte pari. function/property add korte pari.remove korte pari.
//.............................................................
// function hello(){
//     console.log('hello world')
// }
//javascript function ==> function + objetc ka treet kore

//console.log(hello.name)   //function er name access

// you can add your own properties
// hello.myownProperty = 'very unique value';
// console.log(hello.myownProperty)

//name property --> tells function name;
//function provides more useful properties

// {} free space ->  prototype   prototype holo  ak obj{}
//console.log(hello.prototype)  // prototype holo khali obj{}.prototype print korle browser 1property pabo constructor. constructor er valu holo (hello function)
// only function provide prototype property........................................

// function hello(){
//     console.log('hello world')
// }

//const hello={key1:'value1'}   //object
//const hello= ['value']  //Array

// if(hello.prototype){
//     console.log('prototype is present')
// }else{
//     console.log('prototype is not present')
// }

//................................................................................................
//prototype khali object{} ka treat kore .khali obj a jekno kiso ad korte pari. function/property add korte pari.remove korte pari.
//property add
// function hello(){
// console.log('hello world')
// }
// hello.prototype.abc='abc'
// hello.prototype.xyz='xyz'
// function add
// hello.prototype.sing= function(){
//  return 'good morning'
// }
// console.log(hello.prototype)
// console.log(hello.prototype.sing())

//............................................................................
//__proto__,[[prototype]] vs prototype
//proto,[[prototype]] => proto chain create kore. proto refrence
//prototype => simple object