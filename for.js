//! for of
//! for in
//! for each
//! for map

let students=['mahavir','vishal','rohit','ujjwaal']

//? for of is used to show all elements present  in given array
// for(let i of students){
//   console.log(i);
// }

//? for in is used to show all the element index value of a given array


// for(let i in students){
//   console.log(i);
// }

//? for each is used to print all element as well as index value

 
// students.forEach((current, index, arr) => {
//   console.log(arr);
// })

// students.forEach(function name(current , index, arr){
// console.log(current);
// })


//?nullish coalescing operator (??): null undefined

// let val1;
// let val2=10;

// const name=(num1, num2) =>{
// return num1+num2;
// }

// let val3=null;
// let val= val1 ?? name(2,4) ?? val2;

// console.log(val);



//?(for map) is same as (for each) but foreach can't be return any value
//? And  foreach performs an action on each element
//? And to creates a new array with transformed elements

// let arrOfStudent=students.map((current, index, arr)=>{
//   return arr;
// })

// console.log(arrOfStudent);
//?map always taking a unquie value and always in a same order

const map= new Map();
map.set("in", "india")
map.set("en", "england")
map.set("rus", "russia")
map.set("in", "india")

//! map mai forin work nahi krta hai
// console.log(map);

// for (const key of map) {  // its print all value
//   console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(`${key} statement ${value}`);   // its print seprate value
//   }

  //! object mai forof loop nahi use hota hai q ki object ke pass iteration nahi hai

  const object={
    firstName: "mahavir",
    lastName:"mahato"
  }

  // for (const key in object) {
  //   console.log(key, object[key]);  //! forin is use hota hai object ko print krne mai

  // }

  //? same thing array mai use krte hai forof and forin

  // const arr=['name',2,3,4,56,6];
  // for (const element of arr) {
  //   console.log(element);  //!forof array ke elements ko print krta hai
  // }

  // for (const element in arr) {
  //   console.log(element); //! forin array ke index ko print krta hai
  // }


  //! foreach*************************foreach*********************foreach

  // const arr=[1,2,3,4,5,6];
  // arr.forEach(function(element){
  //   console.log(element);
  // })

  // arr.forEach((element)=> {
  //   console.log(element);
  // })


  //!  ***************************************see below
  // function printme(item){
  //   console.log(item);
  // }

  // arr.forEach(printme); //! this is an another way to do same thing


  // arr.forEach((element,index,array)=>{
  //   console.log(element, index,array);
  // })



// let arr=[
//   {
//     name:"mahavir",
//     education:"BCA"
//   },
//   {
//     name:"sujit",
//     education:"12th"
//   },
//   {
//     name:"om ji",
//     education:"12th"
//   }
// ]

// arr.forEach((item,index,arr)=> {
//   console.log(item.name,index);
// })


//!filter method helps for giving return value and also to filter any kind of data

let arr=[1,2,3,4,5,6,7,8,9,10]
// const value=arr.filter((num)=> num>4)
const value=arr.filter((num)=> {;
  return num >4                 //! jab curly brasess(scope start krte hai) dete hai woh aapne sath return value leta hai
})


// let newArray=[]; 

// arr.forEach((num) => {
// if(num>4){
//   newArray.push(num)
// }
// })

// console.log(newArray);

console.log(value);