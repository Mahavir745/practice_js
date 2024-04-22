//different ways to work with function

let function1= function(...num){
  return num;
}

// console.log(function1(199,200,300));

//function2 working method....

let user={
  name:"Mahavir",
  phone:"1234"
}

let function2= function(newUser){
  return ` Username: ${newUser.name} Phone: ${newUser.phone}`;
}

// console.log(function2(user));
// console.log(function2({
//   name:"mahavir",
//   phone:'12344'
// }));

// we also do same thing in array

let function3=function(newArray){
  return newArray[4];
}

let arr=[1,2,34,4];
// console.log(function3(arr));

console.log(function3([1,2,3,4,5]));

