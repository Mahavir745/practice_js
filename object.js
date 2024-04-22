let sym=Symbol("key");

let obj={
  name:"mahavir kumar mahato",
  class:23,
  "first Name": "mahavir",
  [sym]:"keys" // This is a way to define symbol 
}

// console.log(obj[sym]);// this is a way to call a symbol data type
// console.log(obj["first Name"]); // this is way to call any type of data
// console.log(obj.name);// this is another way to call an object data type


//making wordpower liberies:::
const normal={
  name: "mahavir",
  class: 10,
  email: "kumarmahavir500@gamil.com",
  roll:Math.floor((Math.random()*(999-100))+100)
}
// console.log(normal);
normal.email="mahavir23@navgurukul.org";
// console.log(normal);
// Object.freeze(normal);
normal.email="mahavir24@google.org"



// normal.greeting=function(){
//   console.log("hello mahavir");
// }
// console.log(normal.greeting());



//nested objects

const nested={
  fullname:{
    firstName:'Mahavir'
  }
}

// const {fullname}=nested;
// const{firstName}=fullname;
// console.log(firstName);


// console.log(nested.fullname.firstName);
const {name} = obj
console.log(name);


// combine to object
// const combine = Object.assign({},nested, normal)
// console.log(combine);


const combine2={...normal,...nested} //spread operator
console.log(combine2);

