//Block scope vs function scope

//let and const are block scope
//var is function scope

// {
    //block
// }


//alada alada block  let use
// {
//     let firstName = 'riajul';
//     console.log(firstName)
// }
// {
//     let firstName = 'islam';
//     console.log(firstName)
// }
// {
//     console.log(firstName) // Error ashbe
// }
// let firstName = 'pavel';
// console.log(firstName)



//const use
// {
//     const lastname = 'pavel';
//     console.log(lastname)
// }
// {
//    const  lastname = 'fahim';
//     console.log(lastname)
// }
// {
//     console.log(lastname)  //Error ashbe 
// }



//var is function scope

// {
//     var myName = 'riajul';
// }
// console.log(myName) //  bahere accsess 

// {
//     var myName = 'islam';
//     console.log(myName)
// }
// {
//     console.log(myName)  //true
// }

//local scope
// function name(){
//     var myname = 'riajul';
//     console.log(myname)
// }
// name()


//global scope
// let myName = 'riajul'
// function name(){
//     console.log("inside a variable"+myName)
// }
// name()
// console.log('outside a variable'+myName)


// if(true){
//     var name = 'riajul';
//     console.log(name)
// }
// console.log(name)


function myApp(){
    if(true){
        var firstName = 'riajul';
        console.log(firstName)
    }
    if(true){
        console.log(firstName)
    }
    console.log(firstName)
}
myApp()