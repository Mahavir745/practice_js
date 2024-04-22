//!reduce prototype of an array
const arr=[1,2,3,4,5,6,7]
let start=0
const newArray=arr.reduce((acc, currentvalue)=> {
  console.log(`acc${acc} and currentvalue ${currentvalue}`);
  return acc+currentvalue;
},0)

console.log(newArray);

//!practice shopping cart

const shopping=[
  {
    course:"webdevelopment",
    fee:1499
  },
  {
    course:"python",
    fee:1899
  },
  {
    course:"nodejs",
    fee:2499
  },
  {
    course:"react",
    fee:1499
  }
]

const bill=shopping.reduce((acc, totalfee)=> acc+totalfee.fee,0)
console.log(bill);