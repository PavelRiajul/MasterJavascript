//Add HTML elemenet using Javascript


//innerHTML to add html element
const todoList = document.querySelector('.toto-list')
//console.log(todoList.innerHTML)

//change element
// todoList.innerHTML='<li>New todo</li>'

//new element add
// todoList.innerHTML = todoList.innerHTML+'<li>New Todo</li>'
//shortcut
todoList.innerHTML+='<li>New Todo</li>'
todoList.innerHTML+='<li>Tech students</li>'

// when you should use is , when you should not
//element change korar jonno innerHTML use korbo
//new element add korar jonno korbo na