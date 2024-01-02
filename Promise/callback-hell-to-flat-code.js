//callback hell to flat code  -> promise use
const hadding1 = document.querySelector('.heading1')
const hadding2 = document.querySelector('.heading2')
const hadding3 = document.querySelector('.heading3')
const hadding4 = document.querySelector('.heading4')
const hadding5 = document.querySelector('.heading5')

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color=color;
                resolve()
            }else{
                reject('elemnt not found')
            }
        },time)
    })
}
// changeText(hadding1,'one','red',1000)
// .then(()=>{
//      return changeText(hadding2,'two','blue',1000)
// })
// .then(()=>{
//      return changeText(hadding3,'three','green',1000)
// })
// .then(()=>{
//   return  changeText(hadding4,'four','yellow',1000)
// })

//shortcut
changeText(hadding1,'one','red',1000)
.then(()=> changeText(hadding2,'two','blue',1000))
.then(()=>changeText(hadding3,'three','green',1000))
.then(()=>changeText(hadding4,'four','yellow',1000))
.catch((error)=>{
    alert(error)
})