//createElement append,prepend, remove, before,after

//document.createElement()
//append
//prepend
//remove

//element create korbo
// const newTodoItem = document.createElement('li')  //step1
// const newTodoItemText = document.createTextNode('tech students')  //3
// const todoList = document.querySelector('.toto-list') //5
// todoList.append(newTodoItem)  //6
// newTodoItem.appendChild(newTodoItemText) //4
// console.log(newTodoItem)//2

//shortcut
// const newTodoItem  = document.createElement('li') //1
// newTodoItem.textContent='Tech students'  //3
// const todoList = document.querySelector('.toto-list')  //4
// todoList.append(newTodoItem) //5  //append list a add korbe
//todoList.prepend(newTodoItem)  //prepend first a add korbe
// console.log(newTodoItem)  //2


//todo1 element ke remove korbo
// const todo1 = document.querySelector('.toto-list li')
// todo1.remove()
// console.log(todo1)


//before, after (toto-list er bahere print hobe)
const newTodoItem  = document.createElement('li') 
newTodoItem.textContent='Tech students'  
const todolist = document.querySelector('.toto-list')
//todolist.before(newTodoItem)
todolist.after(newTodoItem)