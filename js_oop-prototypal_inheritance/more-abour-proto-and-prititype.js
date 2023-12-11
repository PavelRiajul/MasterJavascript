//more about proto and prototype
//prototype --- functions
//je function  banabo   je function object create korbe oitai (constraction) function
//.................................................................
// let numbers = new Array(1,2,3)  // new Array  holo => array constructor   //array prototype
// console.log(Array.prototype)

//.....................................................
// let numbers = [1,2,3];
// console.log(Object.getPrototypeOf(numbers))  //array prototype  

//.................................
function hello(){
    console.log('hello')
}
//prototype
//console.log(hello.prototype)
//....................................................
//prototype change
 hello.prototype=[]
console.log(hello.prototype)  //array hobe

//.........................
//value push korbo
hello.prototype.push('1')
console.log(hello.prototype)


//aekhane konotai amara real life a use korbo na