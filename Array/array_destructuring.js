//array destructuring
//array destructuring holo 1 ta array theke data/item/element golo alada kore 1 ta 1ta variable a store kore rakha.

//old way
// const myArray = ['value1','value2']
// let myVar1 = myArray[0]
// let myVar2 = myArray[1]
// console.log('value of myVar1',myVar1)
// console.log('value of myVar2',myVar2)

//destructuring
// const myArray = ['value1','value2','value3']
// let[myVar1,myVar2,myVar3]=myArray
// console.log('value of myVar1',myVar1)
// console.log('value of myVar2',myVar2)
// console.log('value of myVar2',myVar3)



// const myArray = ['value1','value2','value3']
// let[myVar1, ,myVar2]=myArray       //  myVar1, ,value2 skip kore  value3 myVar2 a store hobe
// console.log('value of myVar1',myVar1)
// console.log('value of myVar2',myVar2)



const myArray = ['value1','value2','value3','value4']
//let myNewArray = myArray.slice(2)  //value3->myVar1 and value4->myVar2   a store hobe
 let[myVar1,myVar2,...myNewArray]=myArray       
 console.log('value of myVar1',myVar1)
 console.log('value of myVar2',myVar2)
 console.log(myNewArray)