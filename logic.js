//Selection
let prompt = document.getElementById('js-prompt');
let inputName = document.getElementById('js-input-name');
let button = document.getElementById('js-button');

let displayName = document.getElementById('js-display-name');
let todo = document.getElementById('js-todo');
let inputTodo = document.getElementById('js-input-todo');
let buttonNew = document.getElementById('js-button-new');

let list = document.getElementById('js-list');
let listItem = '<div class="list-item"><i class="fas fa-trash-alt"></i><p class="insert"></p><i class="far fa-check-circle"></i></div>';

//Manipulation
button.addEventListener('click', getName);
function getName(){
  prompt.classList.add('noDisplay');
  todo.classList.remove('noDisplay');
  displayName.innerText = inputName.value;
};

function addListeners(){
  let listItems = document.querySelectorAll('.list-item');
  for(let x = 0; x < listItems.length; x++){
    listItems[x].children[0].addEventListener('click', () => {
      listItems[x].remove();
    });
    listItems[x].children[2].addEventListener('click', () => {
      listItems[x].children[1].classList.add('strike');
      listItems[x].children[2].style.color = "green";
    });
  };
};

buttonNew.addEventListener('click', addTodo);
function addTodo(){
  if(!inputTodo.value){
    inputTodo.classList.add('emptyEffect');
    inputTodo.setAttribute('placeholder', "please enter a todo");
  } else {
    inputTodo.classList.remove('emptyEffect');
    inputTodo.setAttribute('placeholder', "add todos!");
    //Add Item to List
    list.insertAdjacentHTML('beforeend', listItem);
    let insert = document.querySelectorAll('.insert');
    insert[insert.length - 1].innerText = inputTodo.value;
    //Make Blank
    inputTodo.value = "";

    addListeners();
  };
};