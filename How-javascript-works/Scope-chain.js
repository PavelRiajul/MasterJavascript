//8Topic
//lexical environment, scope chain

const lastName = " islam";  //1
const printName = function(){
    const firstName = "Riajul";    //2
    console.log(firstName)
    console.log(lastName)
}
printName()    //3

//Global execution context

//code execution phese                                        golbal  memory creation phese
//line1-> lastName=islam                                            window:{}
//2->   pora function print                                          this;window
//                                                                 lastname:Error code execute  aerror 
//                                                                          na hoye  islam hobe
//                                                                  printname:Error execute er somoy eror 
//                                                                            na hoye pora function print
//                                                                             hobe.
//function execution context
// const printName = function(){
//     const firstName = "Riajul";    //1
//     console.log(firstName) //2
//     console.log(lastName)  //3
// }
//  code execution phese                       local memory
//  line->1                                            argument[]
//  2                                            firstName:Riajul 
//  3                                            lastName: 3 line code execution korar somomy global memory 
//                                               te pabo.code execute korar somy error na hoye value return 
//                                               kore debe exp-> Riajul
//        

//.................................................................
//kono kiso jodi local memory te na pae ta hole global memory te pabo 
//aetae lexical scope/lexical environment

//lexical scope
const lastname = 'Islam';
function printname(){
    const firstName = 'Riajul'
    function myFun(){
        console.log(firstName)
        console.log(lastName)
    }
    myFun()
}
printName
