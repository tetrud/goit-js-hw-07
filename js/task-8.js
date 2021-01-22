//Задание 8 - дополнительное, выполнять не обязательно

//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"');
const destroyBtnRef = document.querySelector('button[data-action="destroy"');
const boxesRef = document.querySelector('#boxes');
const boxArray = [];

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.valueAsNumber));
destroyBtnRef.addEventListener('click', clearBoxes);

function rgbColorRandom() {
  const color = () => Math.floor(Math.random() * 256);
  return `rgb(${color()}, ${color()}, ${color()})`;
};

function clearBoxes() {
  boxesRef.textContent = '';
};

function createBoxes(amount){ 
  
  for (let i = 0; i < amount; i += 1){    
    const createDiv = document.createElement('div');
    const sizeDiv = (i * 10) + 30;
    createDiv.style.width = `${sizeDiv}px`;
    createDiv.style.height = ` ${sizeDiv}px`;
    createDiv.style.backgroundColor = rgbColorRandom();
    
    boxArray.push(createDiv);
  };

  boxesRef.append(...boxArray);
};