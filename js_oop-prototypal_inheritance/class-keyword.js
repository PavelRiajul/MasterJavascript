//class keyword
//class keyword are fake

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

//......................................................
//class keyword use

// class createuser{
//     constructor(){
                                      //class keyword syntex
//     }
// }
//...................................................
 class createUser{
constructor(firstName,lastName,email,age,address){
        //console.log('constructor called')  //jotobar object print kormo totobar called korbe exm=> user1,user2 2 bar call hoga .are createUser are agee (new) na lagaele erroe ashbe
    this.firstName = firstName    
    this.lastName = lastName
    this.email = email
    this.age = age
    this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return 'tamirul millat';
    }
    func(a){
        console.log(a)
    }
    
}
const user2 = new createUser('sirajul','parvez','parvez@gmail.com',26,'house')
const user3 = new createUser('imadul islam','fahim','fahim@gmail.com',16,'house')
console.log(user2.about())
console.log(Object.getPrototypeOf(user3))
user2.func('Riajul')
