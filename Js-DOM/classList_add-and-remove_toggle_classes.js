//classList add and remove toggle classes

const sectionTodo = document.querySelector('.section-todo')
//console.log(sectionTodo) //html a section-todo er bitore jakiso ase sob dekhabe
// console.log(sectionTodo.classList)  //classList holo ak (div/section a kotogola class ase)

//color add
//sectionTodo.classList.add('bgDark')

//section-todo te 2 ta class ami containar call ke remove korbo
sectionTodo.classList.remove('container')
console.log(sectionTodo.classList)

//togol
sectionTodo.classList.toggle('bgDark')
//sectionTodo.classList.toggle('bgDark')  //bgDark color akta ase tai  2 bar dele kaj korbe na


const header = document.querySelector('.header')
console.log(header.classList)
header.classList.add('bgDark')





