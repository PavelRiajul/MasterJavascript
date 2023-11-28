//for of loop in array
// const fruits=['mango','apple','banana']

// for(let fruit of fruits){
//     //fruit -> variable name
//     console.log(fruit)
// }

//problem array to new array convert item
const fruits=['mango','apple','banana']
const fruis2=[]
for(let fruit of fruits){
    fruis2.push(fruit.toUpperCase())
}
console.log(fruis2)