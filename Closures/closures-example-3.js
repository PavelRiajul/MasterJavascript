//3Topic
//closures example 3
//..................................................
// function closuresDemo(){
//     var x = 10;
//     function anotherFunc(){
//         var y = 20;
//         console.log(`sum`+ (x+y))
//     }
//     return anotherFunc
// }
// var returnfunc =closuresDemo() //closuresDemo function return
// console.log(returnfunc) //pora function return korbe
// returnfunc()//anotherFunc return korbe => sum 30
//.........................................................
// function myFunction(power){
//     return function(number){
//         return number ** power    // all myFunction line 1
//     }
// }
// const cube = myFunction(2);  //line2
// const ans =cube(3) // line3
// console.log(ans)// line4

//....................analyes
// code execution phase                                                 global memory creation
//line->1already memory store                                              window:{}
//                                                                         this:window
//                                                                          myFunction:function
//                                                                          cube:starting Error
//                                                          return function(number){
//                                                              return number ** power} power:2
//                                                                          ans:starting Error
//                                                                            return function(number){
//                                                              return number ** power} number:3
//line->2 myfunction(2) ke call kormo.  joto function ke call kormo javascript a create hobe  1 function execution context(fec)
// return function(number){
//     return number ** power    // all myFunction line 1
// }
// code execution phese                                          local memory
//                                                             argument:[2]    
//                                                            parameter->power:2
//                                                            return function-> ak function he
//2line->lexical environment a execute hobe->globalmemory er ->cube


//abar line->3 cube(3) ke call korar jonno create korte hobe  function execution context
// code execution phese                                          local memory
//                                                             argument:[]  
//                                                              number:3
//
//console.log(ans) console a 9 print hobe


//code ko arrow function.......................
// const myFunction= (power)=>{
//     return (number)=>{
//         return number ** power
//     }
// }
// const squre = myFunction(2)
// const ans = squre(2)
// console.log(ans)

//aro shortcut.................

//  const myFunction = (power)=>{
//     return (number)=> number ** power
//  }
//  const squre = myFunction(2)
//  const ans = squre(2)
//  console.log(ans)


//aro shortcut Exeperiance Developer..............
const myFunction= power => number=> power** number
 const squre = myFunction(2)
 const ans = squre(2)
 console.log(ans)