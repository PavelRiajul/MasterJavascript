//optional chaining

// const user = {
//     firstName:'Riajul',
//     address:{houseNumber:'1234'}
// }
// console.log(user.firstName)
// console.log(user.address.houseNumber)

//...........................................................................
//ami address ke comment kore rakhob and address console a access korbo and ami chacchi error na deye undefind na debe

// const user = {
//     firstName:'Riajul',
//     //address:{houseNumber:'1234'}  //ami chacchi error na deye undefiend debe
// }
// console.log(user.firstName)
// console.log(user?.address?.houseNumber)

//.....................................  undefind ashbe

let user;
console.log(user?.firstName)
console.log(user?.address?.houseNumber)