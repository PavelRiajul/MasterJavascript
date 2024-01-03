//clone Nodes
//new element create kore prepend korbo

const ul = document.querySelector('.toto-list') //1
const li = document.createElement('li') //2
li.textContent='new todo' //3
// li ke clone korbo
const li2 = li.cloneNode(true)  //5
ul.append(li) //4
ul.prepend(li2)  //6