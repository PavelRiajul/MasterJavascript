//get and set attributes

// const link = document.querySelector("a")
// console.log(link.getAttribute('href')) //amar href attribute value chai ->#home ashbe outpot


// const inputElement = document.querySelector('.form-todo input')
// console.log(inputElement.getAttribute('type'))  //type attribute value chack outpot text ashbe


//...................................attribute change
const link = document.querySelector("a")
// console.log(link.getAttribute('href'))
console.log(link.getAttribute('href').slice(1))  //amar #home na amar just home outpot lagbe tai lekhbo (.slice(1))
//change
link.setAttribute('href','https://codprog.com')
console.log(link.getAttribute('href'))