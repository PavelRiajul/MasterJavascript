//methods
//methods holo => function inside object
// jee function obj er bitore define kore oitai method

//normal obj method accsee...........................................................
// const person={
//     firstname:'Riajul',
//     age:22,
// }
// console.log(person.firstname)

//.....................................................................................
// const person={
//     firstname:'Riajul',
//     age:22,
//     about: function(){
//         console.log('person name is Riajul and age is 22')
//     }
// }
 //console.log(person.about)    //amar pora function outpot lagbena
 //ami function call korbo
// person.about()
//................................................................................................
//firsname and age onek somoy change hote pare.  ta ami templete string use korbo and ${this.firstname} use korbo. this holo pora  person er obj.are about function person obj ke call korbe.and about function function this use korbo oitai pora person er obj

// const person={
//     firstname:'Riajul',
//     age:22,
//     about: function(){
//         //console.log(this)  //this pora person er obj
//         //console.log(`person name is ${firstname} and age is ${age}`)  //Error ashbe
//         console.log(`person name is ${this.firstname} and age is ${this.age}`)  //true
        
//     }
// }
// person.about()

//.....................................................................................
//function ke bahere define korlam
function personInfo(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`)
}

    const person={
    firstname:'Riajul',
    age :22,
    about: personInfo  //value personInfo function
}
const person1={
    firstname:'imadul',
    age :16,
    about: personInfo  //value personInfo function
}
const perso2={
    firstname:'sirajul',
    age :26,
    about: personInfo  //value personInfo function
}
//personInfo()  //daireckt call korle firstname and age undefind ashbe.
//console.log(personInfo)  //console.log print korle pora function print hobe.

//person.about()   //concept=>  about() holo personInfo er function and personInfo value about a set korlam.tarpor person name is {this.firstname} this holo => about() ke call korbe person method. example person.about(). are this value holo pora person obj.

person.about()
perso2.about()
person1.about()


