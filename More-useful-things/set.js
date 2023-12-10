//set  (it is iterable)
//store data
//diffrent data-type store korte parbo
//set amra kokhon use korbo jokhon amar kase uniq value thakbe 1 value 1bar er beshi use korbo na exm:userId

//sets also have its own method
//No index-based access
//Order is not guaranteed
//unique items only (no duplicates allowed)

//set create sentex ==> const numbers = new Set();

// const numbers = new Set([1,2,3]);
// console.log(numbers)

//no duplicate allowed in item................................................
// const numbers = new Set([1,2,3,3])  //1 ta 3 access pabe
// console.log(numbers)


//No index based access........................................................
// const numbers = new Set(1,2,3);
// console.log(numbers)
// console.log(numbers[2])  // no index based assess

//new Set()ampty set  a amra value/difrent data-type add korte pari..............................
// const items = ['item1','item2','item3']
// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(2)  //duplicates no access
// numbers.add(['item1','item2']);  //alada alada memory
// numbers.add(['item1','item2'])    //alada alada memory
// //numbers.add(items)
// console.log(numbers)


//set a kono particular value ase ki na check korbo...........................................
//check korbo has() deye
// const numbers = new Set([1,2,3]);
// numbers.add(5)
// if(numbers.has(5)){
//     console.log('is present')
// }else{
//     console.log('is not present')
// }
// console.log(numbers)

//set is iterable
//iterable a amra for of loop use kori   akhon amra set() a for of loop use korbo........................
// const numbers = new Set([1,2,3]);
// numbers.add(4);
// numbers.add(5);
// for(let number of numbers){
//     console.log(number)
// }


//problem amra akta array theke uniqElement access korbo.
// const numbers = [1,2,2,3,4,5,5,6,7,8,8,9,9];
// const uniqElement = new Set(numbers);
// console.log(uniqElement)
// //console.log(uniqElement.length) //length accesee korbe na

// //amra dekhbo uniqElement array er  length koto
// let length = 0;
// for(let element of uniqElement){
//     length++
// }
// console.log(length)

