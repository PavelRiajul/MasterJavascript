//3Topic
//closures example 2

function hello(x){
    const a= 'VarA';
    const b='VarB';
    return function(){
        console.log(a,b,x)    //pora hello function //line1
    }
}
const ans = hello('age');    //ans -> line 2
ans() //line3

//first a Global execution context create
//global execution context 2 part    -> 1)code execution phase   2)memory creation phase/global memory
//analyses-> clouser kivabe code execute kore
//....................................................
//     code execution phase                                             memory Creation phase/Global memory
//    line1-> already memory te store hoye gese                                  window:{ }
//                                                                               this:window
//                                                                               hello:function
//                                                                     ans:starting a Error(uni)
//                                                    line->2 tarpor->retur function(){console.log(a,b,x)}
//                                     mane-function execution context er local memory a;var1 b:var2 x:age
//code execute er agee (call stack banate hobe.call stack a first hobe globa execution contaxt )
// line->2  hello('age) function call hobe .jeeta return hobe oita (ans variable) a store hobe.
//hello function er jonno er function execution context(FEC) create korte hobe.

// const a= 'VarA'; //line1
// const b='VarB';  //line2
// return function(){    //line3
//     console.log(a,b,x)  
// }
// codeexecution phase                                             local memory                           
//  a=VarA  ->line  1                                                argument[age]
//  b=VarB  ->line2                                                   x:age
//                                                                   a:er valuestarting a Error(uni)code
//                                                                    execute er somoy print hobe VarA
//                                                                   b:er value starting a Error(uni) same  
//                
//line->3 return function
return function(){
    console.log(a,b,x)    
}
//return function Hello function er bitor present he.
// return function hello function er bitor joto kiso ase exm->x,a,b-> sob gola sathe neye return hobe.
//return function return hoye (ansname ka variable a jabe)

//abar function execution context
//ans() call kormo

//  code execution context                                local memory
//    1->ans()call korle                                     argument[ ]
//  hello function er bitore (x argument) a,b,variable all value  print korbe
//exm-> x->age ,a->VarA, b->VarB outpot lexical exvironment a execute hobe
//