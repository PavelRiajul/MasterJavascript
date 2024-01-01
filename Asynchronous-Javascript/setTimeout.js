//Topic 1
//JavaScript's setTimeout function is one of the most useful functions for working with asynchronicity in your code. It allows you to run a function after a certain amount of time has passed. This can be really useful for making sure that certain code doesn't run until after another piece of code has finished running.
//...................................................................
//Javascript holo Synchronous programming language. javascript holo single threaded.single thered code ke execute kore.
//.......................................................
//synchronous programming VS asynchronous programming

//synchoronous programming -> sob programming holo synchronous programming
//(every line of code is executed one after the other, and each task must wait for the previous one to be completed before moving to the next.)
//(1)=>Thread Model - Synchoronous is a single theread
//(2)=> speed - Synchoronous is slower in nature
//jotokkhon porjonto akta kaj complete hobe na totkkhon porjonto next step  a jete parbe na /next step er code ke block kore rakhbe. amra synchronous programming ke (blocking code bolte pari)
//exmple:
// console.log('hello')  //first finished
// for(let i = 1;i<1000;i++){
//     console.log('inside for loop') //2nd finished
// }
// console.log('script end')  //3rd finished
//......................................................................
//Asynchronous programming (next step code ke block kore na)
//setTimeout function (javascript provied korena  provied kore (web browser))
//setTimeout return debe (1 id)
//function - a function containing a block of code
//milliseconds - the time after which the function is executed
//exmple:- setTimeout(function, milliseconds);
//more exmple............................................
// console.log('script start');
// function hello(){
//     console.log('Hello world')
// }
// setTimeout(hello,1000)   //1000 milisecond mane 1 second tar mane 1 second pore hello function run hobe
// console.log('script end')

//Arrow function use..............................................
// console.log('script start')
// setTimeout(()=>{
//     console.log('inside setTimeout')
// },1000)
// console.log('script end')
// setTimeout kivabe kaj kore
//first a  execute hobe Gloval execution context (GEC) aekhane sob file run hobe-> Callstack a 
//1st a run hobe console.log script start
//2nd line setTimeout holo Browser er functonlity. browser setimeout dekhbe and 1second javascript er jonno count korbe(oppekkha)
//3rd line  script end run hobe
// browser a 1 second hole ( setTimeout holocallback function Callstack Queue a jabe)
//tarpor (Event Loop)-> (Callstack Queue) ke -> (Callstack a neye jabe) tarpor code run hobe 2line inside setTimeout

//........................................................... setTimeout with 0 seconds
// console.log('script start')
// setTimeout(()=>{
//     console.log('inside setTimeout')
// },0) //time holo koto second pore/dely code ta run hobe
// for(let i=1;i<100;i++){
//     console.log("...")
// }
// console.log('script end')
//1st line code run hobe script start
//3nd line 100 bar ...
//4rd script end
//2nd inside setTimeout
//........................................................ clearTimeout
console.log('script start')
const id = setTimeout(()=>{
    console.log('inside setTimeout')
},0)
for(let i=1;i<100;i++){
    console.log("...")
}
console.log('setTimeout id is',id)
console.log('clearing time out')
clearTimeout(id) // clearingTimeout holo setTimeout jee id variable a store korchi oita ame  run korbo na
console.log('script end')