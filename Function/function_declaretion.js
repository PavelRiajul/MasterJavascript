// 1 topic
//function declaretion/Named function
//function is a machine
//function define 3 parts (1)Input (2)output (3) Processing
//how to use function  Ans: repeted kaj golo ke reduce kora
//function holo dry(don't repet your self)
//function holo reuseable

//function define......................................................................................
//function->(function keyword) happyBirthday->(function name) ()->parameter pass{ki kaj korbe}->body

// function happyBirthday(){}    // -->  porata holo function signature
//function lekhbo agee call korbo pore
//example: 
// function happyBirthday(){
//     console.log('happy birthday')
// }
// happyBirthday()  // --> function call            (call , invoke, run -> same )

//2+4 sum  value fixed...............................
// function twoPlusFour(){
//     console.log(2+4)
// }
// twoPlusFour()

//return................................
// function twoPlusFour(){
//     return 2+4  //value fixed
// }
// console.log(twoPlusFour())

//2+4 =6 print korbo na variable a store korbo...........................................
// function twoPlusFour(){
//     return 2+4      //value fixed
// }
// const returnValue = twoPlusFour()
// console.log(returnValue)

//reuseable function......................................................................
// function sumAnyNumber(number1,number2)/*-->parameter pass*/{
//     return number1 + number2   //not value fixed
// }
// const returnValue = sumAnyNumber(10,23)  //--> argument value pass 10 and 23
// console.log(returnValue)


//problem:-
// function name isEven  //input: 1 number  // output: even number true, odd number number false
// function isEven(number){
//     if(number %2===0){
//         return true;
//     }
//        return false;
// }
// console.log(isEven(21))

//shortcut
// function isEven(number){
//     return number%2===0;
// }
// console.log(isEven(3))

//problem:-
//input:string    //output: firstCharacter
// function firstCharter(anyString){
//     return anyString[0];
// }
// console.log(firstCharter('Riajul'))

// problem:-
//input:array, target (number)
//output:index of target if target present in array   // jodi false hoy tahole -1 return hobe

function findTarget(array,target){
    for(let i =0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray=[2,4,6,8,90];
const ans = findTarget(myArray,2)
console.log(ans)
