//Iterate elements
//array like object -> indexing , length property

// const navItem = document.getElementsByTagName('a') 
//console.log(navItem)

//we can't use forEach method to iterate trough HTML Collection
//simple for loop
//for of loop
//forEach loop
//..............................................for loop simple
// for(let i = 0;i<navItem.length;i++){
    //console.log(navItem[i])

//     const navitems=navItem[i]
//     navitems.style.backgroundColor = '#444'
//     navitems.style.color ='green'
//     navitems.style.fontWeight='bold'
// }


//............................................................. for of loop use
// for( let navitems of navItem){
//      navitems.style.backgroundColor = '#444'
//      navitems.style.color ='green'
//      navitems.style.fontWeight='bold'
// }


//  nodelist 3 loop chalate parbo
const navItem = document.querySelectorAll('a')

//simple for loop
// for(let i = 0;i<navItem.length;i++){
    // console.log(navItem[i])

    // const navitems=navItem[i]
    // navitems.style.backgroundColor = '#444'
    // navitems.style.color ='green'
    // navitems.style.fontWeight='bold'
// }
//for of loop
// for( let navitems of navItem){
    // navitems.style.backgroundColor = '#444'
    // navitems.style.color ='green'
    // navitems.style.fontWeight='bold'
// }
//forEach loop
navItem.forEach(navitems=>{
    navitems.style.backgroundColor = '#444'
    navitems.style.color ='green'
    navitems.style.fontWeight='bold'
})

