//this keyword only work in object 

const data={
  user:  'mahavir',
  place: 'dhanbad',

  welcome:function (){
    console.log(`${this.user} welcome!`);
  }
}

data.welcome();


//? arrow function

// let arrow= ( num1, num2) => {
//   return num1+num2;
// }
// console.log(arrow(2,3));


//?implicent returns:
// let arrow= ( num1, num2) => num1+num2;
// let arrow= ( num1, num2) => (num1+num2);
let arrow= ( num1, num2) => ({username:"mahavir"});



console.log(arrow(2,3));

