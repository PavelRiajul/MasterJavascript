//Little demo project 
//Random colors
//change body  background color
//.................................................


// const mainButton = document.querySelector('button')   //line//1
// console.log(mainButton) //2
// const currentColor = document.querySelector('.current-color')
// console.log(currentColor)
// const body = document.body;  //3

// function randomColorGenerator(){  //6
// const red = Math.floor(Math.random() *256);  //7
// const green = Math.floor(Math.random() *256);  //8
// const blue = Math.floor(Math.random() *256);   //9
// const randomColor= `rgb(${red},${green},${blue})`    //10
// return randomColor   //11

// }
// mainButton.addEventListener("click",()=>{  //3
//     console.log('you clicked me')   //4
//     const randomColor = randomColorGenerator()  //5
//    console.log(randomColor)  //12
//     body.style.backgroundColor=randomColor  //13
//     currentColor.textContent = randomColor
// })



const mainButton = document.querySelector('button')
//console.log(mainButton)
const correntColor = document.querySelector('.current-color')
const body = document.body
function randomColorGenerator(){
    const red = Math.floor(Math.random() *256)
    const green = Math.floor(Math.random() *256)
    const blue = Math.floor(Math.random() *256)
    const random = `rgb(${red},${green},${blue})`
    return random
}
mainButton.addEventListener("click",()=>{
    //console.log('clicke me!')
    const randomColor = randomColorGenerator()
    body.style.backgroundColor =randomColor
    correntColor.textContent=randomColor
})








