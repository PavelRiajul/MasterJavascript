//parameter destructuring

//use  (1)Object   (2)React

// const person={
//     firstname:'Riajul',
//     gender:'male'
// }
// function printDetailes(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }
// printDetailes(person)


//destructuring
const person={
    firstname:'Riajul',
    gender:'male',
    age:22
}
function printDetailes({firstname,gender,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age)
}
printDetailes(person)