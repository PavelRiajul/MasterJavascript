//clone using object.assign
//memory te same object
// const obj ={
//     key1:'value1',
//     key2:'value2'
// }
// const obj2 = obj
// //obj new value add
// obj.key3 = 'value3'
// console.log(obj)
// console.log(obj2)


//..cloning
const obj ={
    key1:'value1',
    key2:'value2'
}
//const obj2 = {...obj}  // spread opertor use  obj te jodi key add kori oita obj2 te add hobe na  aeta holo cloning
const obj2 = Object.assign({},obj)   //old way  cloning
obj.key3 = 'value3'
console.log(obj)
console.log(obj2)