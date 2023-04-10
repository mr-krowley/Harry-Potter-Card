import { data } from "./card.js";
const containerCard = document.querySelector(".containerCard");
const input = document.querySelector("input");
const select = document.querySelector("select");
const option = document.querySelector(".optionDefolt");

function createCard(obj) {
  // функция создает одну карточку
  let card = document.createElement("div"); // создание саммой карточки
  card.classList.add("card");

  // создание картинки и контенера textCard с остальным текстом
  card.innerHTML = `<div> <img class="image" src="${
    obj.image
  }" alt="character photo"></div>
                    <div class="textCard">            
                      <h2 class="name">${obj.name}</h2>
                      <p>Actor: ${obj.actor}</p>
                      <p>Gender: ${obj.gender}</p>
                      <p>House: ${obj.house == "" ? "unknown" : obj.house}</p>
                      <p>Wand core: ${
                        obj.wand.core ? obj.wand.core : "unknown"
                      }</p>
                      <p>Alive: ${obj.alive ? "yes" : "no"}</p>

                    </div>`;

  return card;
}

function reviewCard(arr) {
  //функция перебора элементов из  передоваемого data она же и вызывает метот отрисовки createCard
  arr.forEach(function (elem) {
    containerCard.append(createCard(elem));
  });
}
function searchFilter(event) {
  // функция обработчик поисковой строки сравнение ввода с ключевыми словами карточек name и выбор селекта house
  let filterDate = data
    .filter((card) => card.house.includes(select.value))
    .filter((card) =>
      card.name.toLowerCase().includes(input.value.toLowerCase().trim())
    );
  containerCard.innerHTML = "";
  reviewCard(filterDate);
}
const selectData = (arr) => {
  // функция создает новый  масив со списком школ оставляя уникальные значения
  const newData = arr.map((elem) => elem.house); // преобразую данные сставляя только названия школ
  const endData = [...new Set(newData)].filter((elem) => elem != ""); // фильтрую на юникальность в новый масив

  console.log(newData);
  console.log(endData);
  renderOption(endData);
};

const renderOption = (array) => {
  // функция создания option в html
  array.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element;
    option.value = element;
    select.append(option);
  });
};

(function main() {
  // самовызывающаяся функция main точкa входа в програму
  reviewCard(data);
  selectData(data);
})();

input.addEventListener("input", searchFilter);
select.addEventListener("change", searchFilter);
