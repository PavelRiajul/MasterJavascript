//short syntax method

// const user1={
//     firstname:'Riajul islam',
//      age:22,
//      about: function(){
//      console.log(this.firstname,this.age);
//      }
//     }
//     user1.about()


//short syntax
//about:function() lekhbo na => just about()
const user1={
    firstname:'Riajul islam',
     age:22,
     about(){  
     console.log(this.firstname,this.age);
     }
    }
    user1.about()