//call apply bind
//this keyword er value/context access korar jonno 3 ta rolls use korbo => call, apply, and bind
//call() and bind() method unlimited argument nete parbe.
//..........................................................................

// const user1={
//     firstname:'Riajul islam',
//     age:22,
//     about: function(){
//         console.log(this.firstname,this.age)
//     }
// }
// user2 a kono about method nae but ami use korbo.kinto copy korbo na.user2  obj er jonno about use korbo
// const user2={
//     firstname:'imadul islam',
//     age:16,

// }
//user1.about.call()  //undefind ashbe
//user1.about.call(user2)  //outpot user2 er value access hobe


//call() and bind() method unlimited argument nete parbe............................................
//  function about(hobby,gitter,country){
//     console.log(this.firstname,this.age,hobby,gitter,country)}
// const user1={
//     firstname:'Riajul islam',
//     age:22,
// }

// const user2={
//     firstname:'imadul islam',
//     age:16,
// }
//.....................................................................................
//call() method use 
//about.call(user1,'swezarland','new gitter','bangladesh')
//..................................................................................
//apply method use
//apply method matro 2 ta argument nete pare 1ta sob somoy this er value nirdaron korte exm => user1,user2.
//are 2nd ta 1ta Array nebe
//about.apply(user1,['netherland','old gitter','bd'])
//.........................................................................................
//bind method use
//call,apply method jee function er sathe use korbo sathe sathe call() hoye jabe.kint bind() method sathe sathe function call kore na bind 1 function return korbe.

//about.bind(user1,'philisstin','old','bd')  //sathe sathe call hobe na
// const func = about.bind(user1,'philisstin','old','bd')
// func()


