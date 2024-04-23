// document.querySelector('#pic1').onclick=function(){
//   alert("click on one pic")
// }

// document.querySelector('#pic1').addEventListener("click",function(e),false{
//   alert("you choose first img by using event listener")
// })

// todo: here is false is a default value.
//todo: here false/true is a event propagation
//todo: true: capturing top to bottom
//todo: false: bubbled bottom to top 


//? now see example:

// document.querySelector('ul').addEventListener('click',function(e){
//   console.log("Click inside the ul");
// },false)

// document.querySelector('#pic3').addEventListener('click',function(e){
//   console.log("third image clicked");
//   e.stopPropagation(); //! if we stop our propagartion
// },false)
// document.querySelector("#pic5").addEventListener("click",function(e){
//   e.preventDefault(); //! its stop the behaviour of a currect element
//   e.stopPropagation();
//   console.log("google is clicked");

// },true)


//todo: now build a function after click img is removered

document.querySelector("ul").addEventListener('click',function(e){
  if(e.target.tagName==='IMG'){
  remove= e.target.parentNode;
  remove.remove();
  }
},false)

//remove.parentNode.removeChild(remove); 