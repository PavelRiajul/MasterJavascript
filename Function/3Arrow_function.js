//Arrow functions
// const happyBirthday = () => {}  -> Arrow function signature

const happBirthday= ()=>{
    console.log('happy birthday')
}
happBirthday()


const sumTwoNUmber = (number1,number2)=>{
    return number1+number2
}
const returnValue = sumTwoNUmber(12,23)
console.log(returnValue)


//odd and even number check
const isEven = (number)=>{
    return number%2===0
}
console.log(isEven(3000))


//function 1 parameter hole 1 line a return korte parbo   shortcut
// const isEven = number => number%2===0;
// console.log(isEven(41))

//terget number
const firstChar = (anyString) => anyString[0];
console.log(firstChar('Riajul'))