//nested destructuring

const users = [
    {userId:1,fristname:'Riajul',gender:'male'},
    {userId:2,fristname:'Imadul',gender:'male'},
    {userId:3,fristname:'Shirajul',gender:'male'}
]

// const [user1,user2,user3] = users
// console.log(user1)


// const [{fristname}, ,{gender}]=users
// console.log(fristname)
// console.log(gender)


//variable name change
const [{fristname:MyFirstname,userId}, {gender:MyGender}]=users;
console.log(MyFirstname)
 console.log(MyGender)
 console.log(userId)

