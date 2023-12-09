//sort method 
//sort method orginal array ke change kore
//ASCII TABLE
//char: ascii value

// '0' :48
// '1' :49
// '2' :50
// '3' :51
// '4' :52
// '5' :53
// '6' :54
// '7' :55
// '8' :56
// '9' :57

//sort
//  5,9,1200,400,3000
//  5,9,400,1200,3000 (expected)

// const numbers =[5,9,400,1200,3000]
// //["5","9","400","1200","3000"] 
// //[53,57,52,49,51]                                  //javascript  number  sort kore na javascript string  sort kore.string sort korar jonno use korbo  ascii code/value
// numbers.sort()
// console.log(numbers)

//..........................................................................................
// const userName = ['riajul','islam','pavel','Riajul']
// userName.sort()
// console.log(userName)


//Acuttly sort.................................................................................
// const numbers = [5,9,1200,400,3000]
// numbers.sort((a,b)=>{
//     return a-b
// })
//  console.log(numbers)


//................................................................
// const numbers = [5,9,1200,400,3000]
// numbers.sort((a,b)=>a-b)
// console.log(numbers)


//concept................................................................
//1200 400
//a-b --> 790
//a-b --> (positive greater than 0) --> b,a   (assinding ored)

//a-b --> negative ---> a,b   (decending order)
//5,9 ---> -4

//realExample:-
//price lowToHigh HighTolow
const products = [
    {productId:1, productName:'p1',price:300},
    {productId:2, productName:'p2',price:3000},
    {productId:3, productName:'p3',price:800},
    {productId:4, productName:'p4',price:9000}
]

//lowToHigh
// const lowToHigh =products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(lowToHigh)

//HighTolow
const lowToHigh =products.slice(0).sort((a,b)=>{
    return b.price-a.price
})
console.log(lowToHigh)