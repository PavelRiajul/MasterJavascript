//1 topic
//forEach
//forEach holo callback function
//forEach argument pass kore

// const numbers = [4,2,5,8];
// //array er index number print kore 2 deye multiply korbo.
// function multiplyBy2(number,index){
//     console.log(`index is${index} number is ${number*2}`)
//     //console.log(`${number}*2= ${number*2}`)
// }
// //multiplyBy2(numbers[0],0)
// //multiplyBy2(numbers[1],1)

// //array sob elemnet 2 deye multiply korbo
// //
// // for(let i=0; i<numbers.length;i++){
// //     multiplyBy2(numbers[i],i) 
// // }


// //forEach
// //forEach use loop er kaj ta shortcut korbe
// //forEach input nee callback forEach input neba function(multiply2)
// numbers.forEach(multiplyBy2)

//forEach shortcut...........................................................................
// const numbers = [2,4,5,8];
// function multiply2(number,index){
//     console.log(`index is ${index} number is ${number*2}`)
// }
// numbers.forEach(multiply2)

//.................................................................................................
// const numbers=[2,3,5,6,8];
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number*2}`)
// })

//.......................................................................................
//problem  3 multiply array all elements
// const numbers = [3,45,70,20];
// numbers.forEach(function(number,index){
//     console.log(index,`number is${number*3}`,)
// })


//problem akta Array er bitor object thakbe oi object er all firstname key er value  print korbo?forEach use
const users=[
    {firstName:'riajul',age:23},
    {firstName:'sirajul',age:27},
    {firstName:'imadul',age:16},
    {firstName:'moni',age:24},
]
// users.forEach(function(user){
//     console.log(user.firstName)
// })

//Arrow function use
users.forEach((user,index)=>{
    console.log(user.firstName,index)
})

//for of loop use
// for(let user of users){
//     console.log(user.firstName)
// }