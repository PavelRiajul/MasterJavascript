//example using class keyword
//amra akta Animal class nebo . and Animal er bitor 2 ta property nebo 1 ta name are 1 ta age and akta method nebo eat method
//Animal class
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //method use
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true
    }
}
// const animall = new Animal('tom',2);
// console.log(animall)
// console.log(animall.isSuperCute())

//dog class
// class dog{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     //method use
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true
//     }
// }
// const doggs = new Animal('tom',2);
// console.log(doggs)
// console.log(doggs.isSuperCute())
//...........................................................................................

//class extends  
//copy
class dog extends Animal{

}
const doggs = new dog('tommy',3);
const cat = new Animal('cats',1)
console.log(cat.isCute())
 console.log(doggs.eat())
 console.log(doggs.isCute())
