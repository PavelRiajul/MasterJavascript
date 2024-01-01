//setInterval
//setInterval 1ta (id) debe
//The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval.
//The setInterval() method repeats a block of code at every given timing event.
//setInterval(function, milliseconds);
//function - a function containing a block of code
//milliseconds - the time interval between the execution of the function
//setInterval function ta holo repeate hobe
//...................................................................
// console.log('script start')
// setInterval(()=>{
//     console.log(Math.random())
// },1000)
// console.log('script end')
//........................................................................
// console.log('script start')
// setInterval(()=>{
//     let total = 0;
//     for(let i=0;i<10000;i++){
//         total += i
//     }
//     console.log(total)
//     console.log(Math.random())
// },500)
// console.log('script end')
//..........................................................................
// console.log('script start')
// setInterval(()=>{
//     console.log('Riajul islam')
// },1000)
// console.log('script end')
//.............................................................................real life example
const body = document.body
const button = document.querySelector('button')

const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126)
    const green = Math.floor(Math.random()*126)
    const blue = Math.floor(Math.random()*126)
    const rgb = `rgb(${red},${green},${blue})`
    body.style.background = rgb
    //console.log(rgb)
},1000)

//button stop
button.addEventListener('click',()=>{
    clearInterval(intervalId);
    button.textContent=body.style.background
})
console.log(intervalId)