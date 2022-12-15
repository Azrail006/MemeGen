const generatorMemeBtn = document.querySelector(".btn");
const memeImage = document.querySelector(".img");
const memeTitle = document.querySelector(".title");
const memeAuthor = document.querySelector(".header__img");
const button = document.querySelector('.btn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2')
const textTop = document.querySelector('.meme__text-top');
const textBottom = document.querySelector('.meme__text-bottom');

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
  generator(memes)
  printMessage(textTop, input1.value)
  printMessage(textBottom, input2.value)
});

function printMessage(element, message) {
  element.innerHTML = message;
}