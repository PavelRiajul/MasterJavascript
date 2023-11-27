// nested if else

//winning number 19

//19 your guess is right
//17 too low
//20 to high

let winningNumber =19;
let userGuess = +prompt("guess a number")  // prompt string input nee // string theke number a conver korte prompt er agee + dete hobe.

// if(userGuess === 19){
//     console.log('you are guess is right')
// }else{
//     if(userGuess< winningNumber){
//         console.log('to low!')
//     }else{
//         console.log('to high!')
//     }
// }

if(userGuess === 19){
    console.log('user gues is right!')
}else if(userGuess<winningNumber){
    console.log('to low')
}else{
    console.log('to high')
}

