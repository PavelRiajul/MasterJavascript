//getters and setters

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname
//     }
//     //method use
//      /*full name use korar jonno get use korbo */  //getter methot
//     get fullName(){
//       return `${this.firstname} ${this.lastname}`
//     }
    
// }
// const person1=new Person('Riajul','islam');
//console.log(person1.firstname)
//console.log(person1.fullName)  //print korle pora function debe.
//kinto amar fullName chai =>  outpot => Riajul islam  fullname(paranthisis use na kore) => just person.fullName
//...................................
//setter method use

class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`
      }
      set fullName(fullName){
        const [firstname,lastname]=fullName.split(" ")
        this.firstname = firstname
        this.lastname = lastname
      }
    }

const person1=new Person('Riajul','islam');
person1.fullName="mohit sharma" //Riajul islam change hoiye mohit sharma bosbe
console.log(person1)

