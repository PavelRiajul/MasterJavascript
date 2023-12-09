//splice method
//start, delete , insert(new item add)

const myArray = ['item1','item2','item3']
//delete
// myArray.splice(1,1)
// console.log(myArray)

// const deleteditem =myArray.splice(1,1)
// console.log('deleted item',deleteditem)
// console.log(myArray)

//insert...................................................
// myArray.splice(1,0,'insertitem')
// console.log(myArray)

//delete and insert
myArray.splice(1,2,'insert1','insert2')
console.log(myArray)