//Object inside array     //array er bitor obj
//very useful in real world applications

const users = [
    {userId:1,fristname:'Riajul',gender:'male'},
    {userId:2,fristname:'Imadul',gender:'male'},
    {userId:3,fristname:'Shirajul',gender:'male'}
]
//console.log(users)

//for of loop use.................................................
// for(let user of users){
//     // console.log(user)
//     console.log(user.fristname)
// }


//for in loop use...........................................................
// for(let user in users){
//     console.log(users[user].fristname)
// }


//for loop use..............................................................
for(let i = 0; i<users.length;i++){
    console.log(users[i].fristname)
}