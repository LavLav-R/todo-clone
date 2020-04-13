//Selection
let prompt = document.getElementById('js-prompt');
let inputName = document.getElementById('js-input-name');
let button = document.getElementById('js-button');

let displayName = document.getElementById('js-display-name');
let todo = document.getElementById('js-todo');
let inputTodo = document.getElementById('js-input-todo');
let buttonNew = document.getElementById('js-button-new');

let list = document.getElementById('js-list');
let listItem = '<div class="list-item"><span>trash</span><p class="insert"></p><button>check</button></div>';


//State

//Manipulation
button.addEventListener('click', getName);
function getName(){
  prompt.classList.add('noDisplay');
  todo.classList.remove('noDisplay');
  displayName.innerText = inputName.value;
};

// function reRun(){
//   for(let x = 0; x < btnNext.length; x++){
//     btnNext[x].addEventListener('click', addTodo);
//   };
//   console.log(btnNext.length);
// };
// reRun();
buttonNew.addEventListener('click', addTodo);
function addTodo(){
  //check any text exist in the previous one before adding
  //add classlist styling
  //Add Item to List
  list.insertAdjacentHTML('beforeend', listItem);
  let demo = document.querySelectorAll('.insert');
  demo[demo.length - 1].innerText = inputTodo.value;
  //Make Blank
  inputTodo.value = "";
};
