//understand callback
//callback beshirvag asynchronous programming a use kore
//akhon ami first a synchronous programming a use korbo

//.........................................................callback function
// function myFunc(callback){
//     console.log('function is doing task 1');
//     callback()
// }
// function myFunc2(){
//     console.log('function is doing task 2');
// }
// myFunc(myFunc2)
//Anonomous function use
// function myFunc(callback){
//     console.log('function is doing task 1');
//     callback()
// }
// // myFunc(function(){  //anonomous
// //  console.log('function is doing task 2')
// // })

// //Arrow function
// myFunc(()=>{
//     console.log('function is doing task 2')
// })

//or example..............................................
// function getTwoNumbers(number1,number2,callback){
//     console.log(number1,number2)
//     callback(number1,number2)
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// getTwoNumbers(3,5,addTwoNumbers)
//....................type check..............................
// function getTwoNumbers(number1,number2,callback){
// if(typeof number1==='number' && typeof number2=== 'number'){
//     callback(number1,number2)
// }else{
//     console.log('worng data type')
//  }
// } 
//  function addTwoNumbers(num1,num2){
//      console.log(num1+num2)
//  }
// getTwoNumbers(3,3,addTwoNumbers)
// shortcut.....
// getTwoNumbers(4,4,(num1,num2)=>{
//     console.log(num1+num2)
// })
//...................................................................callback er jaigai onSuccess nand onFailure
// function getTwoNumbers(number1,number2,onSuccess,onFailure){
//     if(typeof number1==='number' && typeof number2=== 'number'){
//         onSuccess(number1,number2)
//     }else{
//         //console.log('worng data type')
//         onFailure()
//      }
//     } 
    // function addTwoNumbers(num1,num2){
    //     console.log(num1+num2)
    // }
    //getTwoNumbers(3,3,addTwoNumbers)
    //shortcut
    // getTwoNumbers(9,2,(num1,num2)=>{
    //     console.log(num1+num2)
    // },()=>{
    //     console.log('wrong data type')
    //     console.log('please pass numbers only')
    // })
    
    //shortcut...............................
    function getTwoNumbers(number1,number2,onSuccess,onFailure){
        if(typeof number1==='number' && typeof number2=== 'number'){
            onSuccess(number1,number2)
        }else{
            //console.log('worng data type')
            onFailure()
         }
        } 
        function addTwoNumbers(num1,num2){
                 console.log(num1+num2)
             }
             function onFailure(){
                console.log('wrong data type')
                console.log('please pass numbers only')
             }
        getTwoNumbers(4,4,addTwoNumbers,onFailure)
