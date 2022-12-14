//   async function meme() {

// const { text } = require("express");



// let response = await fetch('https://api.imgflip.com/get_memes')
// let content = await response.json()


//  for (const sector in content.data.memes) {
//     console.log(content)
//    }
// }
// meme()


const generatorMemeBtn = document.querySelector(".btn");
const memeImage = document.querySelector(".img")
const memeTitle = document.querySelector(".title");
const memeAuthor = document.querySelector(".header__img");
const button = document.querySelector('.btn')
const input = document.querySelector('.memgen__input')
let memes = [];

fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    memes = data.data.memes;
  });

  
  const updateDetalis = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
  };

  const generator = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    updateDetalis(array[randomIndex].url)
  }

button.addEventListener('click', () => {
 updateDetalis (input.value)
});


