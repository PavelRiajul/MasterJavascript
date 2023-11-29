//spread operator

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]
// //const newArray = [...arr1,...arr2,89,32]    //clone array and item/element add
// //const newArray= [...'abc']   // string spread korle alada alada vag hoy  (string itarable)
// //const newArray=[...'1234566'] //string spread
// const newArray= [...12345]    // number not iterable
// console.log(newArray)


//spread operator in objects

// const obj1 ={
//     key1: 'value1',
//     key2: 'value2'
// }
// const obj2 ={
//     key3: 'value3',
//     key4: 'value4'
// }
// const newObj = {...obj1,...obj2}
// console.log(newObj)




//..............................................
const obj1 ={
    key1: 'value1',
    key2: 'value2'
}
const obj2 ={
    key1:'valueUnique',     //1 obj a 1 er beshi key value hobe na
    key3: 'value3',
    key4: 'value4'
}
// const newObj={...obj1,...obj2}
// const newObj={...obj2,...obj1}
// const newObj ={...obj2,...obj1, key69:'value69'}      /// new key value add
// const newObj = {...'abc'}   // obj spread  examplefirst key 0:'a', 2nd key 1:'b'
const newObj = {...['item1','item2']}
console.log(newObj)
