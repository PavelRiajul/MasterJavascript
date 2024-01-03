//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll


//multiple element a jodi same class thake 
// const navItem = document.getElementsByClassName('nav') //HTMLCollection
// console.log(navItem)
// amar sob first nav chai
// console.log(navItem[0])
// console.log(typeof navItem)  //object
// console.log(Array.isArray(navItem))   //array like obje arry nehe he

const navItem = document.querySelectorAll('.nav')  //Nodelist
console.log(navItem[0])