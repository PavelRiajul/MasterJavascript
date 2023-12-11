//this keyword window obj
//this keyword window ke represent kore
//console.log(this)
//console.log(window)
//this == window // true
//outpot print hobe=> (window obj). javascript er global obj holo window obj. javascript browser this run kole window obj pabo

//........................................................................
//"use strict"  //use strict mode use korle undefined ashbe
function myFunc(){
   console.log(this)    //console a this print hole browser a window obj print hoye jabe
}
myFunc()
window.myFunc()
//muFunc window obj er bitor add hoye jabe