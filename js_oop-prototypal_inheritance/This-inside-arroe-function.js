//arrow function
//arrow function a this use hobena  undefind ashbe.
//arrow function a this  user1 ar this nehe hota. 
//arrow function a  console a this holo window er jonno


const user1={
    firstname:'Riajul islam',
     age:22,
     about: ()=>{
        //console.log(this)  // window er jonno
     console.log(this.firstname,this.age);  //arrow function a this use korle undefind ashbe
     }
    }
    user1.about()
    user1.about(user1)
    const ans = user1.about.bind(user1);
    ans()