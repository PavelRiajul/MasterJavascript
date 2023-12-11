//solution using object.create

// const userMethods = {
//         about: function(){
//             return `${this.firstName} is ${this.age} years old`
//         },
//         is18: function(){
//             return this.age >=18;
//         },
//         sing: function(){
//             return 'tamirul millat'
//         }
//     }


//     function createUser(firstName,lastName,email,age,address){
//             const user =Object.create(userMethods)  // {} bad deye Object.create() use korse aetao akta empty object       proto te usermethod set hobe exm=> about,is18,string.const user line er maddome set hoise. proto holo refrence  kar refrence userMethods er refrence
//             user.firstName = firstName    
//             user.lastName = lastName
//             user.email = email
//             user.age = age
//             user.address = address;
//             return user;
//     }

//     const user1 = createUser('Riajul islam','pavel','pavel@gmail.com',22,'house')
// console.log(user1.about())
// const user2 = createUser('sirajul','parvez','parvez@gmail.com',26,'house')
// console.log(user2.about())
// const user3 = createUser('imadul islam','fahim','fahim@gmail.com',16,'house')
// console.log(user3.about())
// console.log(user1)




//solution using object.create.............................................................

// const obj1 = {
//     key1:'value1',
//     key2:'value2'
// }
// const obj2 = {
//     key3:'value3'
// }
//console.log(obj1.key1)
//console.log(obj1.key2)
//console.log(obj2.key3)

//console.log(obj2.key1)   // --> undefind ashbe 

// (javascript obj2 te jabe key1 ase kina jodi na thake obj1 a jabe jodi obj1 a thake tahole deye debe  )
//ae kaj ta kivabe korbo (Object.create) method use kore


// const obj1 = {
//     key1:'value1',
//     key2:'value2'
// }
// const obj2 = {}  //=>empty obj   
// obj2.key3 = 'value3';
// console.log(obj2.key3)

//...................................
//there is one more way to create empty object
//  const obj1 = {
//      key1:'value1',
//      key2:'value2'
//  }
//const obj2 = Object.create(obj1)   //return korbe empty object {}
//obj2.key3 = 'value3'
//obj2.key2='unique'  //key value pair add khali obj a
//console.log(obj2.key2) //current ans   //concept =>  javascript 1st obj2 te check korbe key2 ase kina jodi na thake  create.(obj1) a jabe jodi thake tahole print hobe.
//.........................
//console.log(obj2)   //=>  console obj2 print korle browswe er console a outpot er nese akta [[prototype]] =>holo obj1  er object  prototype a key1,key2 er value paowa jabe.(proto holo obj1 er address)
//ache

//.......................
//__proto__, => same
// official ecmascript documentation [[prototype]]  => same
//prototype  => ata alada
//console.log(obj2.__proto__)  //key1,key2  pabo. (obj2 er __proto__ jolo obj1) kivabe hoise (Object.create) method use.