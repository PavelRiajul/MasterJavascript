//3 Topic
//what happends to function declaration?
//2 phese --> (1)compilation phese  (early error checking er jonno)  (2)code execution phese  (kon variable kon scope er maddome belong kore)
console.log(this);   // -->1
console.log(window);  // -->2
console.log(myFunction)  // -->3
console.log(fullName)  // -->4
function myFunction(){
    console.log('this is my function');  // -->5
}
var firstName = 'Riajul';  // -->6
var lastName = "Islam";  // -->7
var fullName = firstName + " " + lastName;  // -->8
console.log(fullName)  // -->9

//Globalexecution context (GEC) stack=>data structure a add/store hoy

  //    code Execution phese                         global memory/creation phese
  // console.log(this){w}-1line                              window:{}
  //  console.log(window){w}-2                       this:window console.log {window} obj print hoy
// console.log(myFunction) pora myFunction            firstName:undefind
  //  print hobe-3line                                 lastName:undefind
  // console.log(fullName) undefind-4                   fullName:undefind
  //  5 line finish global memore er bitor              myFunction:pora function add hobe
  // firstname=Riajul-6
  //lastName=Islam-7
  //fullname=Riajul + Islam-8
  //console.log(fullName) Riajul Islam -9
