//promise/resolve
//promise chaining

//exmple ak promise er resolve 5 hobe
// const myPromise =Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value)
// })

//.than() method promise return kore
//er sobida holo promise er chining create korte 
function myPromise(){
    return new Promise((resolve,reject)=>{
 resolve('foo')
    })
}
myPromise()
.then((value)=>{
    console.log(value)
    value += 'bar'
    return value   //return hoise promise value na
    // internalli ae kaj hoy ->return Promise.resolve(value)
})
.then((value)=>{
    console.log(value)
    value += 'buzz'
    return value
})
.then((value)=>{
    console.log(value)
})
