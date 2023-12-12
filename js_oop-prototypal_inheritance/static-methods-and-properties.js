//static methods and properties
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname
        this.age= age
    }
    //static method
    static classInfo(){
        return `this is person class`
    }
    //static property lekhbo (dese)
    static dese = 'static property'
    get fullName(){
        return `${this.firstname} ${this.lastname}`
      }
      set fullName(fullName){
        const [firstname,lastname]=fullName.split(" ")
        this.firstname = firstname
        this.lastname = lastname
      }
      //eat method holo object releted
      eat(){
        return `${this.firstname} is eating`
      }
    }

const person1=new Person('Riajul','islam',23);
console.log(person1)
console.log(person1.eat())

//static
const info = Person.classInfo();  //static method class call korbe direct exm:=>Person.classInfo()
console.log(info)

//static property access
console.log( Person.dese)

