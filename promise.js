// todo: q and bluebirds we used in earlier, these two are libaries.
let promiseone= new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task is completed");
    resolve();
  },1000);
  
});

promiseone.then(function(){
  console.log("Promised consumed");
})



new Promise(function(resolve,reject){
 setTimeout(function(){
  console.log("async task2");
  resolve();
 },1000);

}).then(function(){
  console.log("Async 2 resolved");
})


const promiseThree= new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "Mahavir",email: "mahavir777kumar@gmail.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user);
})


//todo: **********************************************FOUR********************************************

const promiseFour= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error= true;
    if(!error){
      resolve({username: "mahavir", email:"kumarmahavir500@gmail.com"})
    }else{
      reject("ERROR: Something went wrong");
    }
  },1000)
})


// promiseFour.then().catch()

promiseFour
.then((user)=>{
  console.log(user);
  return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("Program running successfully either it resolve or error");
})






//**todo: ************************************five */

const promiseFive= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username: "mkm", password: "123"})
    }else{
      reject("Error");
    }
  },1000)
})

async function consumepromisefive(){
  try {
    const response=await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromisefive()

// async function getdata(){
//   try {
//     const response=await fetch('https://jsonplaceholdder.typicode.com/users')

//     const data=await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('e',error);
//   }
// }

// getdata()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});

