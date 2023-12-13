//2Topic
//closures example 1
function printFullName(firstName,lastname){
      function printName(){
        console.log(firstName,lastname);  //printFullName pora function line-1
      }
      return printName;
}
const ans = printFullName('riajul','islam')  //line 2
ans()  //3

//  conde Exeusition phase                                       memory creation/global memory phase
//  line1 already printFulName function execute kore memory      window:{} //call stack a (GEC) store 
// te store korse
//                                                                      hobe.
//  line2  printFullName ke call korbe   er jonno                      this:window
// function execution context banabo  jeta                             PFullName:function 
//   stack memory te store hobe                       line2->const  ans:Error (uni) line-2 return printName
//                                                                     function hobe.
//
//
//
//function printName(){
 //   console.log(firstName,lastname);  //printName pora function line-1
//}
//return printName; //line 2 
//ans() //line3
//........................................................
//  function execution context 1st bar call (fec) ak array like object hobe jar name (arguments)

//      code execution phase                                            Local memory
//    line 1 memory te stote hobe                                    argument:[riajul,islam]
// line->2return printName return hobe khali  return hobe na          firstName:riajul
//                                                                     astname:islam
//                                                                  return printName:Function prtintFullName
//                                                                     and printName soho return hobe
//  ....................................                                                                   
//function execution context 2 bar  ans()call kormo line 3
//  code execution                                                      localmemory
//                                                                       argunemt:[]
// line3->ans() call hole printFullName and return printname soho firstName lastnamae all value print hobe.
//lexical envaironment  er maddome print hobe.
//


//........... concept
//function printName(){
 //   console.log(firstName,lastname);  //printName pora function line-1
//}
//return printName; //line 2 
//line 2  ans holo =>  return printName  function .are printFullName function return kore 
//printName function + firstname + lastname

