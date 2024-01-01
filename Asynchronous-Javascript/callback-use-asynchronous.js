//callbacks,callback hell,pyramid of doom
//akhon ami use korbo -> asynchronous programming a
//example
const hadding1 = document.querySelector('.heading1')
const hadding2 = document.querySelector('.heading2')
const hadding3 = document.querySelector('.heading3')
const hadding4 = document.querySelector('.heading4')
const hadding5 = document.querySelector('.heading5')

// setTimeout(()=>{
//     hadding1.textContent='Heading1'
//     hadding1.style.color='violet'
//     setTimeout(()=>{
//         hadding2.textContent='Heading2'
//         hadding2.style.color='purple'
//     },2000)
//     setTimeout(()=>{
//         hadding3.textContent='Heading3'
//         hadding3.style.color='pink'
//     },2000)
// },1000)

//task  delay color
//one    1s    violet
//two    2s    purple
//three  2s    red
//four   1s    pink
//five   2s    green
//six    3s    blue
//seven  1s    brown

// aetar name holo (callback hell).................. nested er vitor nested (ae code accha nahe)
// setTimeout(()=>{
//     hadding1.textContent='one';
//     hadding1.style.color='violet'
//     setTimeout(()=>{
//         hadding2.textContent='two';
//         hadding2.style.color='purple'
//         setTimeout(()=>{
//             hadding3.textContent='three';
//             hadding3.style.color='pink'
//             setTimeout(()=>{
//                 hadding4.textContent='four';
//                 hadding4.style.color='red'
//                 setTimeout(()=>{
//                     hadding5.textContent='sive';
//                     hadding5.style.color='green'
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)

///callback hellpyramid of dom...............................................
function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback()
            }
        }else{
        if(onFailureCallback)
        onFailureCallback()
        }
    },time)
}
changeText(hadding1,'one','red',1000,()=>{
    changeText(hadding2,'two','blue',2000,()=>{
        changeText(hadding3,'three','green',1000,()=>{
            changeText(hadding4,'four','pink',1000,()=>{
                changeText(hadding5,'fivr','red',3000,()=>{

                },()=>{console.log('hadding5 dose not exist')})
            },()=>{console.log('hadding4 dose not exist')})
        },()=>{console.log('hadding3 dose not exist')})
    },()=>{console.log('hadding2 dose not exist')})
},()=>{console.log('hadding1 dose not exist')})