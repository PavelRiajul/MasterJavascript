// template string
let age = 22;
let firstName = "Riajul islam"

//"my name is Riajul islam and my age is 22" 
//old way
// let aboutMe = "my name is"+" "+firstName+" "+"and my age is"+" "+age;
// console.log(aboutMe)

//new way template string
let aboutMe = `my name is ${firstName} and my age is ${age}`
console.log(aboutMe)