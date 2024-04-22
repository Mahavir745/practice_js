let arr=[1,3,4,5,6,7];
console.log(arr);

// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)
// at
// : 
// ƒ at() // its find the value by taking index value;
// concat
// : 
// ƒ concat() its add two array
// constructor its make a new array

// ƒ copyWithin() its take three input(postion,start,end) on it change the value of postion according to range(start,end)
 
// ƒ every() Its take a condition and check each and every element pass the condition


// indexOf() to take value and returns index value
// includes() search  Is a particular element present in given array 

// join() its joins an array and make it a string
// lastIndexOf() // check a particular element present at last of an array in index
// pop() its remove last element of an array
//push() its add a element in last of an array
// reverse() its reverse our array
//shift() its remove first element of an array
// unshift() its add a element in first position
// flat() take value and combine neasted array and make it one
//slice() its give a part of element from an array by putting(start , end)
//splice() its also give a part of element from an array by putting (srart, end)


// const newArray=[1,2,3,4,[3,4,5,6,[9,0,10,23,45]]];
// const flat=newArray.flat(Infinity);
// console.log(flat);

console.log(Array.isArray("mahavir")); //check wheathe a element is an array or not
console.log(Array.from("mahavir")); // Its covert element into an array;

let score=100;
let score2=200;
let score3=300;

console.log(Array.of(score,score2, score3)); // of() is used to create an array by element or vairables

arr=[1,2,3,4,5];
arr2=[2,3,4,5,6];
combine=[...arr,...arr2];
console.log(combine);

