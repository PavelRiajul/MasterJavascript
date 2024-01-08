//Click event on multiple buttons

const firstButton = document.querySelector('#one')
firstButton.addEventListener("click",function(){
    console.log('clicked me!!')
})


//ami chacchi 3 ta button aksathe event add korbo

// const allButtons = document.querySelectorAll('.multiple-buttons button')
//loop chalabo
// for(let button of allButtons){
    // button.addEventListener("click",function(){
        // console.log('clicked me!!')
    // })
// }

//amar text content chai
// const allButtons = document.querySelectorAll('.multiple-buttons button')
//loop chalabo
// for(let button of allButtons){
    // button.addEventListener("click",function(){
        //console.log(this) //3 ta button alada alada print hoy
        // console.log(this.textContent) //3 ta button er alada alada text content gula print hobe
    // })
// }

//Arrow function use korle undefined ashbe. this use korle.this holo window. 90% arrow function use kore.
// const allButtons = document.querySelectorAll('.multiple-buttons button')
// for(let button of allButtons){
    // button.addEventListener("click",()=>{
        // console.log(this.textContent) //arrow function  use jorle undefind ashbe this use korle
    // })
// }

//simple loop use
// const allButtons = document.querySelectorAll('.multiple-buttons button')
// for(let i=0;i<allButtons.length;i++){
    // allButtons[i].addEventListener("click",function(){
        // console.log(this.textContent)
    // })
// }

//forEach loop use
// const allButtons = document.querySelectorAll('.multiple-buttons button')
// allButtons.forEach(function(button){
    // button.addEventListener("click",function(){
        // console.log(this)
    // })
// })