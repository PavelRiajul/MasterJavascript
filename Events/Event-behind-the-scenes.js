//Event Behind the scenes
console.log('script start')
const allButtons = document.querySelectorAll('.multiple-buttons button')
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{ //event object use (e) holo object
        console.log(e.currentTarget.textContent)
    })
})

console.log('script end')