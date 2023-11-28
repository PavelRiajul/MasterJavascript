//how to clone array
//0 way
// let array1 = ['item1','item2']
// let array2 = array1
// console.log(array1)
// console.log(array2)
//console.log(array1 === array2) // true  same array

//1st way
// let array1 = ['item1','item2']
// let array2 = ['item1','item2']
// array1.push('item3')
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)  //false alada array

//2nd way  slice
// let array1 = ['item1','item2']
// let array2 = array1.slice(0)
// array1.push('item3')
// console.log(array1===array2) //false alada array
// console.log(array1)
// console.log(array2)

//3rd way  concat
// let array1 = ['item1','item2']
// let array2 = [].concat(array1)
// array1.push('item3')
// array1.push('item4')
// console.log(array1===array2) //false alada array
// console.log(array1)
// console.log(array2)

//concat......................................................
// let arrone = [1,2,3,4]
// let arrtwo = [5,6,7,8]
// arrone=arrone.concat(arrtwo)
// console.log(arrone)

//.......................................................
// let array1 = ['item1', 'item2']
// let array2 = array1.slice(0).concat(['item3','item4']) //1way
// let array2 = [].concat(array1,['item3','item4'])           //2nd way
//  console.log(array2)

//spread operator use.............................................
//let arrone = [1,2,3,4]
// let arrtwo = [5,6,7,8]
// arrone = [...arrone, ...arrtwo]
// console.log(arrone)

//spread.............................................................
// let array1 = ['item1','item2']
// let array2 = [...array1]
// array1.push('item3')
// array1.push('item4')
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)

//.....................................................................
// let poorCountry = ['bangladesh','srilanka']
// let richCountry = [...poorCountry,'america','china','canada']
// console.log(richCountry)

//......................................................................
// let poorCountry = ['bangladesh','srilanka']
// let richCountry = ['america','china','canada']
// let onemoreCountry = [...poorCountry,...richCountry]
// console.log(onemoreCountry)

