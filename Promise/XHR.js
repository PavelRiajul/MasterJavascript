//XHR(XML HTTP Request)
const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest()
console.log(xhr)
//step1
//console.log(xhr.readyState)
xhr.open('GET',URL)
//console.log(xhr.readyState)
xhr.onreadystatechange=function(){
   // console.log(xhr.readyState)
   if(xhr.readyState===4){
    //console.log( xhr.responseText)
    const response = xhr.response
    const data = JSON.parse(response)
    console.log(data)
   }
}
xhr.send()
//api user korbo

//website (http status code)