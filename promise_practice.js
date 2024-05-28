const promise= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
      resolve({username: "mahavir",email:"kumarMahavir.com"})
    }else{
      reject("Error: Something went wronng")
    }
  },1000)
})

promise
.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("Program running successfully either it resolve or error");
})