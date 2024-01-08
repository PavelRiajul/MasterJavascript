//event object

const firstButton = document.querySelector('#one')
firstButton.addEventListener("click",function(){
    console.log(this)
})

//jokhon ami kono element ke evend listener add korbo
//js Engine --- line by line execute kore
//browser --- js Engine + extra features
//browser --- js Engine + webApi


//jokhon browser dekhe user event ke ckick kore
// tokhon browser --- 2 kaj kore
//1)callback function  o js engine ke dee  execute korar jonno
//2) callback er sathe browser je event ase sai event information dee
//infoemation debe object form a