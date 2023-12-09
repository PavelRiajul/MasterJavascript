//every method
//every method --> true/false (boolean)
//callback function --> true/false (boolean)
//The every() method checks if all the array elements pass the given test function.

//.............................................................................................
// const numbers = [2,4,6,8,10,12];
// //check korbo numbers array bitor sobgula element even number kina even hole true return korbe even na hole false return korbe.
// const ans = numbers.every((number)=> number % 2===0)
// console.log(ans)


//old way.......................................................................................
// const numbers = [2,4,6,8,10,12];
// function isEven(number){
//     return number % 2===0
// }
// const ans = numbers.every(isEven);
// console.log(ans)


//real example.............................................................
const usercart=[
    {productId:1, productName:'mobile',price:22000},
    {productId:2, productName:'laptop',price:4000},
    {productId:3, productName:'watch',price:5000}
]

//check every product price <30000
const ans = usercart.every((cartitem)=>cartitem.price <30000);
console.log(ans)