//filter method/function
//filter  new array return kore  kinto orginal array ke change kore na

// const numbers = [1,2,3,4,5,6];
// const isEven=(number)=>{
//     return number % 2===0;
// }
// const newNumber = numbers.filter(isEven)
// console.log(newNumber)


//shortcut...............................................................
const numbers = [1,2,3,4,5,6];
 const evenNumber =numbers.filter(function(number){
    return number % 2 ===0;
})
console.log(evenNumber)