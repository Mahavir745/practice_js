// const user= {
//   username: "Mahavir",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function(){
//     console.log(this);
//     console.log(this.loginCount);
  
//   }
// }

// console.log(user.getUserDetails());
// console.log(user.username);


function user(username,loginCount,isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;

  return this;
}


// const userOne= user("mahavir",12, true);
// const usertwo= user("kumar", 5,false);

const userOne= new user("mahavir",12, true);
const usertwo= new user("kumar", 5,false);
console.log(userOne);
console.log(usertwo);