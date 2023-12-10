//Map object
//map is an iterabe
//store data in orderd fashion

//store key value pair (like object)
//duplicate keys are not allowed like objects

//different between maps and objects

//objects can only string or symbol
//as key

//in maps you can use anything as key
//like array, number, string

//.........................................................................................
//key value pair holo object literal
//key ==> string
//key ==> symbol
// const person={
//     firstname:'Riajul',
//     age:7,
//     1:'one'
// }
// //console.log(person.firstname)
// //console.log(person['age'])
// //console.log(person[1]) //symble
// //console.log(person)
// for(let key in person){
//     console.log(key)
// }



//key value pair add korbo .set() deye......................................................
// const person = new Map();
// person.set('firstname','riajul islam')
// person.set('age',22)
// person.set(1,'one')  // 1 number ae set kora jabe
// console.log(person)


//value add korbo  .get() deye.........................................
// const person = new Map()
// person.set('firstname','riajul islam')
//  person.set('age',22)
//  person.set(1,'one')  
// console.log(person)
// console.log(person.get(1))  // 1 number deyee value access korte parbo
// console.log(person.get('age'))

//all key access..........................................................
//loop chalabo
// const person = new Map()
// person.set('firstname','riajul islam')
//  person.set('age',22)
//  person.set(1,'one') 
//  person.set([1,2,3],'onetwothree')   //array key akare neya jabe
//  person.set({name:'riajul'},'onetwothree')   //object key akare neya jabe
// //console.log(person)
// //console.log(person.keys())
// //for of loop use
// for(let key of person.keys()){
//     console.log(key)
//     //console.log(key,typeof key)
// }

//obj  fo of loop using map chalabo...............................

// const person = new Map()
//  person.set('firstname','riajul islam')
//  person.set('age',22)
//  person.set(1,'one')
//  //............
// //  for(let key of person){
// //     console.log( key)
// //     //console.log(Array.isArray(key))
// //  }

// //.........
// for(let [key,value] of person){
//     console.log(key,value)
// }



//......................................................
const person={
    firstName:'Riajul islam',
    id:2
}
const userInfo = new Map();
userInfo.set(person, {age:8,gender:'male'})
console.log(person.id)
console.log(userInfo.get(person).gender)