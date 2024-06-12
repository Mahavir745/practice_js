
const image=document.querySelector("img");
const btn=document.querySelector("#btn")


btn.addEventListener('click',()=>{
// fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json.message)
//         image.src=json.message
//       })


let xml = new XMLHttpRequest()
xml.responseType='json'

xml.addEventListener("load",()=>{
    image.src=xml.response.message;
})

// xml.onload= ()=>{
//     image.src=xml.response.message
// }

xml.open("GET", "https://dog.ceo/api/breeds/image/random")
xml.send()

})      