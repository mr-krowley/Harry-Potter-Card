import { data } from "./card";
let containerCard = document.querySelector(".containerCard");

function createCard(obj) {
  // функция создает одну карточку
  let card = document.createElement("div"); // создание саммой карточки
  card.classList.add("full_card");

  let image = document.createElement("image"); // создание картинки 
  image.setAttribute("class", "image");
  image.textContent = obj.image;

  let tname = document.createElement("h2"); //создание  заголовка name
  tname.classList.add("name");
  tname.textContent = obj.name;

  let actor = document.createElement("p"); 
  actor.classList.add("actor");
  actor.textContent = obj.actor;

  let gender = document.createElement("p");
  gender.classList.add("gender");
  gender.textContent = obj.gender;

  let house = document.createElement("p");
  house.classList.add("house");
  house.textContent = obj.house;

  let wand = document.createElement("p");
  wand.classList.add("wand");
  wand.textContent = obj.wand;

  let alive = document.createElement("p");
  alive.classList.add("alive");
  alive.textContent = obj.alive;

  card.append(image, tname, actor, gender, house, wand, alive); //вставка созданного в Html

  containerCard.append(card);
}

function reviewCard(arr) {
  //функция перебора элементов из  передоваемого data она же и вызывает метот отрисовки createCard
  arr.forEach(function (elem) {
    createCard(elem);
  });

  //return arr;
}
reviewCard(data);
