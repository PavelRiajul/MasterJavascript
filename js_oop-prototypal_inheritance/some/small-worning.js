//don't do this mistake

// const user1={
//         firstname:'Riajul islam',
//          age:22,
//          about: function(){
//          console.log(this.firstname,this.age);
//          }
//         }

//don't do this mistake
//user1.about
//const myFunc =user1.about; //==> refrence store korsi  binding kori nai tai undefind ashbe
//binding korar jonno
// const myFunc = user1.about.bind(user1);
// myFunc()