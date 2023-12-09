//reduce method
//reduce value return kore kinto orginal array ke change change kore na
//reduce method callback function nee
//example:
// .reduce((accumulator,currentvalue){
// } initialValue //(holo koto theke start hobe))


// const numbers = [1,2,3,4,5,60];
// //aim: sum of all the numbers in array
// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// })
// console.log(sum)


//concept
//     accumulator      currentValue     return
        //  1               2             3
        //  3               3             6
        //  6               4             10
        //  10              5             15
        //  15              60            75




//reallife example
const usercart=[
    {productId:1, productName:'mobile',price:22000},
    {productId:2, productName:'laptop',price:34000},
    {productId:3, productName:'watch',price:5000}
]
// const totalAmount = usercart.reduce((totalPrice,currentproduct)=>{
//     return totalPrice + currentproduct.price
// },0)
// console.log(totalAmount)


//for loop use
// var sum = 0;
// for(let i =0;i<usercart.length;i++){
//      sum = usercart[i].price+sum
// }
// console.log(sum)