import { data } from "./card.js";
let containerCard = document.querySelector(".containerCard");

function createCard(obj) {
  // функция создает одну карточку
  let card = document.createElement("div"); // создание саммой карточки
  card.classList.add("card");

  let textCard = document.createElement("div");
  textCard.setAttribute("class", "textCard");

  let image = document.createElement("img"); // создание картинки
  image.setAttribute("class", "image");
  image.src = obj.image;

  let tname = document.createElement("h2"); //создание  заголовка name
  tname.classList.add("name");
  tname.textContent = obj.name;

  let actor = document.createElement("p"); // создание остального текста текста
  actor.classList.add("actor");
  actor.textContent = `actor: ${obj.actor}`;

  let gender = document.createElement("p");
  gender.classList.add("gender");
  gender.textContent = `gender: ${obj.gender}`;

  let house = document.createElement("p");
  house.classList.add("house");
  house.textContent = `house: ${obj.house}`;

  let wand = document.createElement("p");
  wand.classList.add("wand");
  wand.textContent = `wand: ${obj.wand}`;

  let alive = document.createElement("p");
  alive.classList.add("alive");
  alive.textContent = `alive: ${obj.alive}`;

  textCard.append(tname, actor, gender, house, wand, alive); //вставка текста в textCard

  card.append(image, textCard); // вставка кортинки и коробки с текстом в карточку

  containerCard.append(card); //вставка созданного в Html
}

function reviewCard(arr) {
  //функция перебора элементов из  передоваемого data она же и вызывает метот отрисовки createCard
  arr.forEach(function (elem) {
    createCard(elem);
  });

  //return arr;
}
reviewCard(data);
