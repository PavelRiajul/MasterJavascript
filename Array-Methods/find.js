//find method
//The find() method returns the value of the first element that passes a test.
//.............................................................................

// const myArray = ['hello','cat','dog','lion','tiger']

// function isLength3(string){
//     return string.length===3;
// }
// const ans = isLength3('dog');  // dog  length 3 true
// console.log(ans)


//......................................................................
// const myArray = ['hello','catu','dog','lion','tiger']
// function isLength3(string){
//     return string.length===3
// }
//  const ans = myArray.find(isLength3)
//  console.log(ans)

//shortcut......................................................................
// const myArray = ['hello','cat','dog','lion','tiger']
// const ans = myArray.find((string)=>string.length===3)
// console.log(ans)


//realExample................................................................
const users =[
    {userId:1, userName:'riajul'},
    {userId:2, userName:'sirajul'},
    {userId:3, userName:'imadul'},
    {userId:4, userName:'pavel'},
];

//problem:-  amar userId 3 chai
const myUser = users.find((user)=>user.userId===3)
console.log(myUser)