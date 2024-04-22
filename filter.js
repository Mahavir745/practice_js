//! filter se hum koi bhi object ko aasne se return krwa sakte hai

//!In this filter file: filter ke bare mai or jannenge


let booksName=[
  {title:'book 1',genre:'history',publish:1999, edition:2012},
  {title:'book 2',genre:'fiction',publish:2001, edition:2012},
  {title:'book 3',genre:'science',publish:2003, edition:2012},
  {title:'book 4',genre:'non-fiction',publish:1999, edition:2012},
  {title:'book 5',genre:'history',publish:2004, edition:2012}
]

let find=booksName.filter((books) => books.publish===2001 )
find=booksName.filter((books)=>{
  return books.publish>=2001 


})

// console.log(find);

//!more updated things in map

const arr=[1,2,3,4,5,6,7,8]

// const newarr= arr.map((element)=> element+10 )
// console.log(newarr);

//!chainning 

const newarr=arr.map((num)=> num*10).map((num)=> num+1).filter((find)=> find>40);
console.log(newarr);


