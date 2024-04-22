const name='mahavir';

const newName= new String("Mahavir Kumar");

// console.log(name);
// console.log(newName);

//above are the examples of a String

//Now concate two string and make it one

let firstString='Mahavir is a ceo of google';
let secondString='As soon as possible';

const combineBoth=firstString+secondString;
// console.log(combineBoth);
//above is a way to concate two string but we use new one
// console.log(`As soon as: ${firstString}`);

//String methods:-****************************************

// console.log(newName.length);
// console.log(newName[4]);

console.log(newName.charAt(3));//its help to find the character....
console.log(newName.toUpperCase());// its converted mahavir => MAHAVIR
console.log(newName.charCodeAt(0)); // its give ascii value of first letter of a string(m=109)

const lastName= new String(" Mahato");
const combine= newName.concat(lastName);// this method helps to concat two strings and make it one.
console.log(combine);

console.log(newName.indexOf("K")); // its help to find the index of a char
console.log(newName.slice(0,5));//its take a part of a string by putting index value
console.log(newName.endsWith("r")); // its give boolean value of last index,

console.log(newName.split(""));// its convert all character of string into an array.
console.log(newName.split("").reverse()); // its reverse all character of string into an given array
console.log(newName.split(" ").reverse());// its reverse an array and get result=>kumar mahavir


