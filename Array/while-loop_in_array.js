//while loop in array
// const fruits=['mango','apple','banana']
// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase())
//     i++
// }


//problem:- array to new array convert
const fruits=['mango','apple','banana']
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase())
    i++
}
console.log(fruits2)