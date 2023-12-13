//1Topic
//intro clousers
//closure: 30-40%
//analyse: 70-80%
//real example: 100%


//clousers concept bujar jonno amader agee jante hobe akta function te arekta function kivabe retutn korbe.
//mane => function can return functions.
//.............................................
// function myFunc(){
//     return {a:1};
// }
// const ans = myFunc()
//     console.log(ans)
//................................
//outerfunction er bitore arekta  function return  korbo
// function outerFunction(){
//     function innerFunction(){
//         console.log('Hello world')
//     }
//      return innerFunction
// }
// const ans =outerFunction()
//  //console.log(ans)
//  ans()
     
// 1st a amra outerFuncrion ke call korlam .outerFunction return korbe innerFunction ke.innerunction holo akta function .and innerFunction ta store hobe ans name er variable a. are jokhon amra print korbo
//tokhon print hobe  console.log(ans)=> tokhon  pora innerFunction print  hobe. are innerFunction ke call korle ans()  tokhon print hobe => Hello world

//............................................................................
function printFullName(firstname,lastname){
    function printName(){
        console.log(firstname, lastname);
    }
    return printName;
}
const ans = printFullName('Riajul','Islam');
//console.log(ans) // ans print => pora printName function print ashbe
ans()// ans()  call korle printName function call hobe=> Riajul Islam