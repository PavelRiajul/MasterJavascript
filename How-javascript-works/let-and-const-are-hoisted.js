//6Topic
//let are const are hoisted-->yes
// console.log(firstName);
// let firstName = 'riajul';
// console.log(firstName)

//code execution ->global execution context (dsa stack)
//1)code execution phese                  2)creation phese/global memory
//  console.log(firstName)Error//1line          window:{}
// firstName=riajul/2                           this:window
//  console.log(firstName)riajul//3             uninitialization =>Error (const use same erroe)
//
//
//
//
//............................
// let firstName;
// console.log(firstName)  //outpot->undefiend ashbe

//.................
// const  firstName;
//  console.log(firstName)  //outpot -> Error ashbe

//..........
// console.log(typeof firstName)  //outpot error ashbe
// let firstName = 'riajul'

//..............
console.log( typeof firstName)  //outpot undefind ashbe.