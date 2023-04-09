import { data } from "./card.js";
const containerCard = document.querySelector(".containerCard");
const input = document.querySelector("input");
const select = document.querySelector("select");
const option = document.querySelector(".optionDefolt");

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
  wand.textContent = `wand: ${obj.wand.core ? obj.wand.core : "unknown"}`;

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
function searchFilter(event) {
  // функция обработчик поисковой строки сравнение ввода с ключевыми словами карточек name и выбор селекта house
  let inputValue = event.target.value.toLowerCase().trim();
  let selectValue = event.target.value;

  let filterDate = data.filter(
    (card) =>
      (card.name.toLowerCase().includes(inputValue) &&
        card.house.includes(selectValue !== option)) ||
      card.house.includes(selectValue)
  );
  containerCard.innerHTML = "";
  reviewCard(filterDate);
  console.dir(value);
  console.log("работаю");
}



const selectData = (arr) => {
  // функция создает новый  масив со списком школ оставляя уникальные значения
  const newData = arr.map((elem)=> elem.house) ; // преобразую данные сставляя только названия школ
  const endData = [...new Set(newData)]; // фильтрую на юникальность в новый масив
   renderOption(endData);
}

const renderOption = (array) => {
  // функция создания option в html
  array.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element;
    select.append(option);

  });


}




input.addEventListener("input", searchFilter);
select.addEventListener("change", searchFilter);

reviewCard(data);

selectData(data);