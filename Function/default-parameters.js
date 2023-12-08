//default parameters

// function addTwo(a,b){
//     return a+b
// }
// const ans = addTwo(4,5);
// console.log(ans)

//  b mane 2nd argument pass korbo na  just 1 ta argument pass korbo

//old way
// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=0;
//     }
// }
// const ans = addTwo(4);
// console.log(ans)

//new way
function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(4)
console.log(ans)