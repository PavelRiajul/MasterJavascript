//fetch  (fetch promise return kore) are promise return korle .then debo
//akhon amra fetch method deye request pathabo
const URL = 'https://jsonplaceholder.typicode.com/posts'
fetch(URL)
.then(response =>{
 return response.json()
})
//.then(data=>{
    console.log(data)
//})

