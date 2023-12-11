//super keyword

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
    constructor(age,name,speed){
        super(name,age)
        this.speed=speed
    }
    run(){
        return `${this.name} is running at ${this.speed} mph`
    }
}
//object /instance  => same
const tommy = new dog('tommy',3,45);
console.log(tommy.run())
