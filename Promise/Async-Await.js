//async await
//jotokkhon porjonto kaj complete hoi ni totokkhon porjonto next step a jete parbe na.
//async-await hocche jora
//kono function a await thakle function er signeture a async thakte hobe.
//exmple: akta video uploade dele oi video upload proses ta jotokkhon porjonto complete hoini ,totokkhon porjonto onno kono proses are oikhane execute hobe na

//why async use-> jokhon amader function er bitore kono habbi compotionthake oi proses ta complete korte time lagee.

//async await using promise

const URL = 'https://jsonplaceholder.typicode.com/posts'

// fetch(URL)
// .then(response =>{
// return response.json()
// })
// .then(data=>{
//     console.log(data)
// })

async function getPosts(){
 const response = await fetch(URL)
 console.log(response)
}
getPosts()
