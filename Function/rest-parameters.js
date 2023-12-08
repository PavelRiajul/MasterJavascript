//rest parameters

// function myFunc(a,b,...c){
//    console.log(`a is ${a}`);
//    console.log(`b is ${b}`);
//    //console.log(`c is ${c}`);
//    console.log(`a  is `,c);
// }
// myFunc(2,3,5,6,7,8)


// function addAll(...numbers){
//     console.log(numbers)
//     console.log(typeof numbers)
//     console.log(Array.isArray(numbers));
// }
// addAll(2,3,4,5)


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number
    }
    return total;
}
const ans = addAll(3,5,8,5,7,9,7,6)
console.log(ans)