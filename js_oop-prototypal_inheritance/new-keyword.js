//new keyword
//constructor function
//je function  banabo   je function object create korbe oitai (constraction) function
// function createuser(firstName,age){
//     this.firstName=firstName;
//     this.age=age;
// }
// createuser.prototype.about= function(){
//     console.log(this.firstName, this.age)
// }
// const user1 = new createuser('pavel',22)
// //new keyword 3 ta kaj kore.
// //1. empty object this = {}
// //2.return this empty obj
// //Object.create(createuser.prototype) ae kaj ta this key word korbe shortcut a
// console.log(user1)
// user1.about()


//........................................................................................
//new keyword use kormo shortcut
//constructor function
// new keyword 3 ta kaj kore.
// 1. empty object this = {}
// 2.return this empty obj
//3.Object.create(createuser.prototype) ae kaj ta this key word korbe shortcut a

//  function createUser(firstName,lastName,email,age,address){
//             this.firstName = firstName    
//             this.lastName = lastName
//             this.email = email
//             this.age = age
//             this.address = address;
//     }
// //.......................................
// //ami protopype  a add korbo userMethods  method 
// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old`
// };
// createUser.prototype.is18= function(){
//     return this.age >=18;
// }
// createUser.prototype.sing= function(){
//     return 'tamirul millat';
// }


// const user1 = new createUser('Riajul islam','pavel','pavel@gmail.com',22,'house')  //jodi new na lagae tahole ata hobe __proto__ are proto hole undefind ashbe
// const user2 =new createUser('sirajul','parvez','parvez@gmail.com',26,'house')
// const user3 = new createUser('imadul islam','fahim','fahim@gmail.com',16,'house')
// console.log(user3.about())
// console.log(user3.sing())
// console.log(user3.is18())
// console.log(user1)



//amra real life a aeta beshi use korbo prototype