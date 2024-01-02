//xhr practice and error handling
const URL = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest();

xhr.open('GET',URL)
xhr.onload =()=>{
    //const data = JSON.parse(xhr.response)
    //console.log(data)
    if(xhr.status >= 200 && xhr.status <300){
     const data = JSON.parse(xhr.response)
     //console.log(data)
     const id = data[3].id
     console.log(id)
    }else{
        console.log('something went wrong')
    }
}
xhr.send()