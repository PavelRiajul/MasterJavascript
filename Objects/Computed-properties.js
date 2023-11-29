//computed properties

const key1 = 'objKey1';
const key2 = 'objKey2';

const value1 = 'myvalue1';
const value2 = 'myvalue2';

//peoblem:- proved
// const obj={
//     objKey1:'myvalue1',
//     objKey2:'myvalue2',
// }

//1 way
// const obj ={
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj)

//2nd way
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj)
