//Object destructuring
//object destructuring holo 1 ta object theke data/value/element golo alada kore 1 ta 1ta variable a store kore rakha. ba ber kore ana.

//old way
// const riajulObj={
//     name:'Riajul islam',
//     works:'student',
//     hobbies:'trabelling'
// }
// const myName = riajulObj.name
// const myWorks = riajulObj.works
// const myhobbies = riajulObj.hobbies
// myName='king'      //const no change variable name
// console.log(myName)
// console.log(myWorks,myhobbies)   //shortcut output



//destructuring............................................................

// const riajulObj={
//     name:'Riajul islam',
//     works:'student',
//     hobbies:'trabelling'
// }

// const {name,works,hobbies} =riajulObj
// console.log(name)
// console.log(works,hobbies)

//obj key name change..............................................................
// const {name:MyName,works:MyWorks,hobbies:MyHobbies}=riajulObj
// console.log(MyName)


//new key value add.............................
const riajulObj={
    name:'Riajul islam',
    works:'student',
    hobbies:'trabelling',
    year:2001,
    age:22

}
const {works,...restpro}=riajulObj
console.log(restpro)
