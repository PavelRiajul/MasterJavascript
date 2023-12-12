//5Topic
//what happends to function expression
console.log(myFunction)  //1
var myFunction=function(){  // 2
    console.log('this is my function')
}
console.log(myFunction) //3

//first a compile korbe tarbo global scope
//global scope a myFunction
//code execute  korte =>  first global execution context create   
//global execution contaxt stack dsa te store hobe.
//  code execution phese                         creation phese/global memory
 //  console.log(myFunction)undefind //1               window:{} browser
 //  console.log(myFunction) pora function              this:whidow
 //      print hobe ->3                                 myFunction:undefind ashbe (aeta holo function)
//                                                      expression (var variable use)