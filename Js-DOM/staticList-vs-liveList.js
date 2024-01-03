//static list vs live list
//querySelectorAll hamein static list degi
//getElementsBySomething hamein live list degi
// const listItems = document.querySelectorAll('.todo-app ')
// const sixitem = document.createElement('li')
// sixitem.textContent='item6'
// const ul = document.querySelector('.todo-app')
// ul.append(sixitem)
// 
// console.log(listItems)






const listItems = document.querySelector('.todo-app') 
const ul = ul.getElementsByTagName('li')

const sixitem = document.createElement('li')
sixitem.textContent='item6'


ul.append(sixitem)
console.log(listItems)