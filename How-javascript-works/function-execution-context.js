//7Topic
//function execution context
//(array like object--> use kormo index,and length)

let foo = "foo"; // 1 line
console.log(foo); // 2
function getFullName(firstName,lastName){
    console.log(arguments[0]);  //argument[0]=> array like obj length o use korte parbo
    let myVar = "var inside func"
    console.log(myVar);                           //pora function 3 line
    const fullName = firstName + " " + lastName;
    return fullName;
}
const personName = getFullName('Riajul','Islam')  // 4
console.log(personName)  //5
//first a create hobe Global execution context (dsa stack)

//  1)code Execution phese                                             2)creation phese/global memory
// line1->  foo                                                               window:{}
// line2->console.log(foo)foo print hobe                                      this:window
//    new execution/function execution context                                let:Error(uni)
// 1)code execution            2)local memory creation       getFullName:pora function print hobe 3line
//line1->console[foo]         argument:[riajul,islam store hobe]             already store
//2->  myVar=var inside func            firstName:Riajul                    const:Error(uni)
//3->console.log(myVar)var inside func   lastName:Islam
//4-> fullName=firstName+""+lastname    myvar:Error(uni) code execute korle line3  te hobe var inside func
//                                     fullName:Error(uni) code execute korle line 4 te hobe Riajul islam
//5->return fullNmae er value hobe ->global memory const:Error na hoye Riajul islam code execute hobe
//
//
//
//
