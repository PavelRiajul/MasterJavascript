//Promise (holo ak object) promise javascript er feature na .promise browser er feature
//In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

//A promise may have one of three states.
//(1)Pending
//(2)Fulfilled
//(3)Rejected

//A promise starts in a pending state. That means the process is not complete. If the operation is //successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

//For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

//promise er firstName holo Future  //promise future value represent kore
//exmple:ami promise korlam ajke (Friedrice) banabo. ami je promise korlam aetar (status:panding) mane promise akhono fullfiled korinai.
//jodi promise pora kori tahole (status hobe fulfilled)

//const bucket = ['coffe','chips','vegetables','rice']
//ami promise korlam  friedrice  banabo tahole status ->pending and value->undefined
//friedrice bananor jonno amarkase solt nae tahole status->rejected and value -> could not

//...........................................................amar promise holo friedrice banabo
console.log('script start')
const bucket = ['coffe','chips','vegetables','salt','rice'];

//new promise holo function constractor     //pora function holo  executer function
const friedRicePromise = new Promise(( resolve,reject)=>{
  if(bucket.includes('vegetables')&& bucket.includes('salt')&& bucket.includes('rice')) {
resolve('Fried rice')   //array,object,any value print korte parbo
  } else{
    reject("Couldn't do it")
  }
                                        
})

//promise produce

//promise consume   
//how to consume                 (promise ko consume kore browser) browser represent kore
// friedRicePromise.then(
//     //jab promise resolve hoga
//     (myfriedrice)=>{
//  console.log('lets eat',myfriedrice)
// },
// //jab promise reject hoga
// (error)=>{
//     console.log(error)})

//2 callback function lekhar dorkar nae .then hole promise resolve and .catch hole promise reject
friedRicePromise.then(
    (myfriedrice)=>{
  console.log('lets eat',myfriedrice)
    }
).catch(
    (error)=>{
        console.log(error)})

setTimeout(()=>{
    console.log('hello from settimeout')
})
        for(let i =0;i<1000;i++){
            console.log(Math.random())
        }
        console.log('script end')

        //script end er por promise er kaj soro hobe

        //1 line -> script start
        //2 line -> array [] store
        //3 line {status and value}  -> ae kaj browser korbe
        // friedRicePromise.than method  ->  promise add Microtosk qucue add hobe
        //4 line 100 var random number print hobe
        //5 line script end
        //tarpor .catch method - call stack (global gce) a jabe  run hobe
        //6 lets something
        //hello from settimout
