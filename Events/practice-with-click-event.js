//little practice with click event
const allButtons = document.querySelectorAll(".multiple-buttons button")
//console.log(allButtons.length)
allButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        //console.log(e.target)
        e.target.style.backgroundColor = 'yellow';
        e.target.style.color = '#333'
    })
})