
// function bio(){
//   console.log("Mahavir kumar mahato");
// }

// bio();


// function sum(num,num1){
//   let sum=num+num1;
//   return sum;
// }

// console.log(sum(4,5));


// function diff(num,num1){
//   return num-num1
// }

// const difference=diff(4,5);
// console.log(difference);


//? Write a JavaScript function that reverses a number.

const prompt=require("prompt-sync")();


// function reverse(num){
//   let reverse=0;
//  while(num>0){
//   let div=num%10;
//   reverse=(reverse*10)+div;
//   num=Math.floor(num/10);
//  }
//  console.log(`reverse: ${reverse}`);
// }

//  let num=Number(prompt("Enter the number "));
//  reverse(num);


//?Write a JavaScript function that checks whether a passed string is a palindrome or not?

// function reverse(num){
//   let reverse=0;
//   let copyNum=num;
//  while(num>0){
//   let div=num%10;
//   reverse=(reverse*10)+div;
//   num=Math.floor(num/10);
//  }
//  console.log(`reverse: ${reverse}`);

//  if(reverse==copyNum){
//   console.log("Palindrome");
//  }
//  else{
//   console.log("Not Palindrome");
//  }

// }
//  let num=Number(prompt("Enter the number "));
//  reverse(num);

//?Write a JavaScript function that generates all combinations of a string.Example string : 'dog'
 let n='dog';
// for(let i=0; i<n; i++){
//   arr[i]=(prompt("Enter the element "));
// }

// let arr=n.split("");
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//   let str='';
//   for(let j=i; j<arr.length; j++){
//     for(let k=i; k<=j; k++){
//       str+=arr[k];
//     }
//     console.log(str);
//   }
// }


//?making a calculator
// const calculator= (num,num1,operator) => {
//   if( operator =='+'){
//     return num+num1;
//   }
//   else if(operator=='-'){
//     return num-num1;
//   }
//   else if(operator=='*'){
//     return num*num1;
//   }
//   else if(operator=='/'){
//     return num/num1;
//   }
// }

// console.log(calculator(2,4,'-'));


// let a=prompt("Enter the number");
// let b=prompt("Enter the number");

// while(a<=b){
//   let n=a;
//   let count=0;
//   if(a%2==0){
//     while(a>0){
//       console.log("hello world");
//     a=Math.floor(a/10);
//     }
//   }

//   a++;
// }


let arr =[1,2,3,4,5,6]
for(let i=0; i<10; i++){
  arr[i]=Number(prompt("enter the number"))
}
let max = 0;
let secondMax = max;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

console.log("Second maximum element in the array is:", secondMax);