//event bubbling/event propogation
//event capturing
//event delegation


// const grandparant = document.querySelector('.grandparant')
// const parant = document.querySelector('.parant')
// const child = document.querySelector('.child')
// 
//addevent
// child.addEventListener("click",()=>{
    // console.log('you click on chiled')
// })
// 
// parant.addEventListener("click",()=>{
    // console.log('you click on parant')
// })
// 
// grandparant.addEventListener("click",()=>{
    // console.log('you click on grantparant')
// })
// 
// document.body.addEventListener("click",()=>{
    // console.log('you click on body')
// })

//jodi ami child a click kori tahole fisrt a -> child 2nd -> parant 3rd->grandarant 4th->body  te call hobe
//are jodi ami grandparant a click kori first a -> grandparant 2nd->body 
//jodi ami parant a click kori first a ->  parant 2nd-> grandparant 3rd->body te call hobe
//aetae holo event bubbling
//jodi ami a event a  click kore oitar parant event gula call hobe  -> aeta holo bubbling


//event capturing...............................................................................
// child.addEventListener("click",()=>{
    // console.log('capture chiled')
// },true)
// 
// parant.addEventListener("click",()=>{
    // console.log('capture parant')
// },true)
// 
// grandparant.addEventListener("click",()=>{
    // console.log('capture grantparant')
// },true)
// 
// document.body.addEventListener("click",()=>{
    // console.log('capture body')
// },true)
// 
//ami jodi child a click kori 1st a -> body capture hobe 2nd-> grandparant capture hobe 3rd-> parant capture hobe 4th->child capture hobe 
//2nd step a  bubbling hobe ==> //  1st  a -> child  2nd -> parant  3rd->grandarant  4th->body  te call hobe
//manee 1st->you click on chile 2nd->you click on parant  3rd-> you click on grandparant 4th->you click on body




//event delegation.................................................
// const grandparant = document.querySelector('.grandparant')
// grandparant.addEventListener("click",()=>{
    // console.log('you click something')
// })
// bubbling hobe .
//event delegation er sobida holo --> child, parant ,grandparand ae tar jonno alada alada addeventlisener 
// add korar dorkar nae .akta addeventlisener add korlee hobe.aejonno amra event obj use korbo.
//child a click korle ->   grandparad a event call hobe -> tarpor parant a event call hobe 

// event obj use
const grandparant = document.querySelector('.grandparant')
grandparant.addEventListener("click",(e)=>{
    console.log(e.target)
})