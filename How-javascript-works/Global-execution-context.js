//2 Topic
//jekono code code run korar somoy first step a (function execution context create hobe)
//javascript holo (Synchronous programming language)
//synchoronus holo => jokhon amader execute hobe agee 1st line execute hobe.jotokkhon 1st line execute complete na hobe . totkkhon 2nd line execute hobe na.
//are Asynchoronus  feature javascript er kase nae .oita Browser provide kore
//javascript holo (single Thred) mane line by line execute kore.
//Global Execution Context

// console.log(this)  // -->1
// console.log(window) // -->2
// console.log(firstName) // -->3
// var firstName = "Riajul" // --> 4
//console.log(firstname)  //-->5
//what is Global execution context?
//first kaj Global Execution context Create korbo
//Global Execution context 2 parts
//1=> Creation Phese
//2=> Code Execution Phase
//tar mane  first line execute korar agee Global execution context create hobe.

//....
//Global Execution code create hole ki ki hobe?
//  Code Execution Phese                   Global memory/ Creation Phese
//    1)synchronus programming            window {} => obje er bitore key value pair access korte parbo
//    line by line code execude kore     firstname varable (var)se banaele firstName:undefind ashbe
// exm=>console.log(this){window}-1         this:window  obj (browserprovide).this  er  value global scope 
//  console.log(window)(w)-2                window  equal == teue hobe. Global code a this er value Global 
//  console.log(firstname)-3  undefind        object.  Global obj holo window property
//   firstName = Riajul -4                   this:window  er refrence store kore. this window obj create 
//  console.log(firstName) -5 Riajul                               hobe. window holo global obj (browser)
 //                  
 