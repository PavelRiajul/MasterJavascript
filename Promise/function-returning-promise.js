//function returning promise
function ricePromise(){
    const bucket = ['coffe','chips','vegetables','salt','rice'];
    return new Promise(( resolve,reject)=>{
        if(bucket.includes('vegetables')&& bucket.includes('salt')&& bucket.includes('rice')) {
      resolve('Fried rice')   //array,object,any value print korte parbo
        } else{
          reject("Couldn't do it")
        }
                                              
      })
}
//ricePromise call
ricePromise().then(
    (myfriedrice)=>{
  console.log('lets eat',myfriedrice)
    }
).catch(
    (error)=>{
        console.log(error)})