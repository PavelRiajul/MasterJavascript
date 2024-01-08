//MDN event refrence->websiote name
//intr to events
//click events
//event add karne ke 3 tarika hai

//1) html a dairect event add kormo
//exemple:=> button  a event add kormo

//2)button er class/Id select kore javascript a dom a add kore event add korbo -> ae tarika amra use korbo na.
// const btn = document.querySelector('.btn-headline')
// console.dir(btn) //obj rupe a dkhle console.dir debo
// console.log(btn)
// btn.onclick=function(){
//     console.log('Hello how are you')
// }


//3) method --- addEventListener use korbo
// const btn = document.querySelector('.btn-headline')
// function clickMe (){
//     console.log('you called me!!!')
// }
// //ami kono eventlistener korbo ami click event listener korlam
// btn.addEventListener("click", clickMe)

//-- shortcuts--
// const btn = document.querySelector('.btn-headline')
// btn.addEventListener("click", function(){
    // console.log('you clicked me!!!')
// })

//90% Arrow function lekhe
const btn = document.querySelector('.btn-headline')
btn.addEventListener("click",()=>{
    console.log('you clicked Me!!')
})