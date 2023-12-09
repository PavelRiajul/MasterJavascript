//some method
//The some() method tests whether any of the array elements pass the given test function.
//return boolean  true  false

// const numbers = [1,3,5,8];
// //array er bitor je kono akta number even hole true. jodi sob even hoy tahole true.jodi konotai even na hoy tahole false
// const ans = numbers.some((number)=> number % 2===0);
// console.log(ans)



//realExample........................................................
const usercart=[
    {productId:1, productName:'mobile',price:22000},
    {productId:2, productName:'laptop',price:40000},
    {productId:3, productName:'watch',price:5000}
]

//check some product price > 10000
const ans = usercart.some((cartItem)=> cartItem.price >10000);
console.log(ans)