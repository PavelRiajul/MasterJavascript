//has own property


 function createUser(firstName,lastName,email,age,address){
            this.firstName = firstName    
            this.lastName = lastName
            this.email = email
            this.age = age
            this.address = address;
    }
//.......................................
//ami protopype  a add korbo userMethods  method 
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18= function(){
    return this.age >=18;
}
createUser.prototype.sing= function(){
    return 'tamirul millat';
}


const user1 = new createUser('Riajul islam','pavel','pavel@gmail.com',22,'house')  //jodi new keyword na lagae tahole ata hobe __proto__ are proto hole undefind ashbe
const user2 =new createUser('sirajul','parvez','parvez@gmail.com',26,'house')
const user3 = new createUser('imadul islam','fahim','fahim@gmail.com',16,'house')


//user1 er all key access korbo
// for(let key in user1){
//     console.log(key)  // aekhane createUser and prototype er all key access hoise
// }

//.............................
// amar just createUser  er all key access chai.  prototype er all keya chai na
for(let user in user1){
    console.log(user1.hasOwnProperty(user))
// if(user1.hasOwnProperty(user)){
//     console.log(user)
// }

 
}


