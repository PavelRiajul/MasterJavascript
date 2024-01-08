//This keyword inside eventListener callback
const btn = document.querySelector('.btn-headline')

// btn.addEventListener("click",function(){
    // console.log('you clicked me')
    // console.log('value of this')
    // console.log(this)  // normal function er bitore/bahir this er value button
// })


//Arrow function use
btn.addEventListener("click",()=>{
    console.log('you clicked me')
    console.log('value of this')
    console.log(this)  // Arrow  function er bitore/bahir this er value window hobe
})