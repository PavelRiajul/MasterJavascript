//2 topic
//map method
//map method New Array create kore
//map callback function

// const numbers = [3,4,5,6,7];
// const squre = function(number){
//     return number * number
// }
// const squreNumber =numbers.map(squre)
// console.log(squreNumber)

//shortcut..................................................................................
// const numbers = [3,4,5,6,7];
// const squreNumber = numbers.map(function(number,index){
//     return number * number
// })
// console.log(squreNumber)


const users=[
    {firstName:'riajul',age:23},
    {firstName:'sirajul',age:27},
    {firstName:'imadul',age:16},
    {firstName:'moni',age:24},
]
 const userName =users.map((user)=>{
    return user.firstName
})
console.log(userName)