// There are two type of data type primitive and non-primitive.

/*
primitive data type:- number,string,boolean, null, undefined,symbol

non-primitive data type:- object,array, function

*/

/*And there are two types of memory storage, stack(primitive) and heap(non-primitive) */

let number= 23;
let anotherNumber=number;
anotherNumber=21;
// console.log(number);
// console.log(anotherNumber);

// In stack memory storage it make a copy not change in orginal value


// let studentId={
//   name:" mahavir kumar mahato",
//   email: 'kumarmahavir123@google.com',
//   id:1223345
// }

// let anotherStudentId=studentId;

// anotherStudentId.email='mahavir77kumar';
// console.log(anotherStudentId);
// console.log(studentId);

//here abvoe is an example of heap memory, it change in orginal value

// const object={
//   num1:1234,
//   num2:2345,
//   num3: 4567
// }

// // console.log(object)

// console.log('num2' in object);
// if('num2' in object===true){
//   console.log("Yes! thank you mahavir");
// }
// delete object.num2;
// console.log(object);

// console.log('num2' in object);
// if('num2' in object===false){
//   console.log("No! Hey mahavir");
// }

const a= 5 ?? 7;
console.log(a);