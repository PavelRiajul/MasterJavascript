//same method in base class
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
class dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed=speed
    }eat(){
        return `'Modified Eat: ${this.name} is eating'`
    }

    run(){
        return `${this.name} is running at ${this.speed} mph`
    }
}
//object /instance  => same
const tommy = new dog("tommy",3,45);
console.log(tommy.run())
//
console.log(tommy.eat())  //ami jodi eat method call kori tahole (Modified Eat call hoga) jodi na thikto tahole animal/base class class a dekhto  ase kina
