// how to iterate object

const person = {
        name:'Riajul islam',
        age:22,
        hobbbies:['slipping','tour','eting']
    }

// object iterate/key/value access korte .......................................
//1)for in lop and    //2)Object.keys use korbo

// for(key in person){
//     console.log(key)
// }


// sob key value  gula access korte.........................................
// for(let key in person){
//    // console.log(person.key)  //error
//    console.log(person[key])    //true
// }


//sob key value pair  gula access korte.....................................
// for(let key in person){
//     //console.log(`${key}:${person[key]}`)     //ae output amader object er bitor array return korbe na sob value print kore return korbe.
//     console.log(key,":",person[key])     // ae output  amader ke obj er bitor sob key value and  array ta ke o dekhabe.
// }


//2) Object.keys..............................................................
//console.log( typeof( Object.keys(person)))  // obj er bitor sob key gulake array akare return korbe (array type holo akta object)


//for of loop use  (Object.keys)   key access.............................
// for(let key of Object.keys(person)){
//     console.log(key)         //access key
// }

//value access.......................................................
for(let key of Object.keys(person)){
           console.log(person[key])
}