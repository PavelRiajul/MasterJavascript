//some old method to support IE(internet explorer)
//appendchild 
//insertbefore,
 //replecChild, 
 //removeChild

//  const ul = document.querySelector('.toto-list')
//  const li = document.createElement('li')
//  li.textContent = 'tect students'
//  ul.appendChild(li)




//insertbefore
//  const ul = document.querySelector('.toto-list')
//  const li = document.createElement('li')
//  const referenceNode = document.querySelector('.first-todo')
//  li.textContent = 'tect students'
//  ul.insertBefore(li,referenceNode)


const ul = document.querySelector('.toto-list')
//new element
const li = document.createElement('li')
li.textContent = 'tect students'

const referenceNode = document.querySelector('.first-todo')

//ul.replaceChild(li,referenceNode)
ul.removeChild(referenceNode)