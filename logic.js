//Selection
let prompt = document.getElementById('js-prompt');
let inputName = document.getElementById('js-input-name');
let button = document.getElementById('js-button');

let todo = document.getElementById('js-todo');
let displayName = document.getElementById('js-display-name');

//State

//Manipulation
button.addEventListener('click', getName);
function getName(){
  prompt.classList.add('noDisplay');
  todo.classList.remove('noDisplay');
  displayName.innerText = inputName.value;
};

