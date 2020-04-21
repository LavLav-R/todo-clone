//Selection
let prompt = document.getElementById('js-prompt');
let inputName = document.getElementById('js-input-name');
let button = document.getElementById('js-button');

let displayName = document.getElementById('js-display-name');
let todo = document.getElementById('js-todo');
let inputTodo = document.getElementById('js-input-todo');
let buttonNew = document.getElementById('js-button-new');

//Manipulation
//-----------------------------------------------------------------------------
//Prompt > Main ---------------------------------------------------------------
//-----------------------------------------------------------------------------
button.addEventListener('click', getName);
function getName(e){
  if(!inputName.value){
    inputName.setAttribute('placeholder', 'please enter a name :)');
  } else {
    e.preventDefault();
    prompt.classList.add('noDisplay');
    todo.classList.remove('noDisplay');
    displayName.innerText = inputName.value;
  };
};

//-----------------------------------------------------------------------------
//Add Listeners on addTodo ----------------------------------------------------
//-----------------------------------------------------------------------------
function addListeners(){
  let listItems = document.querySelectorAll('.list-item');
  for(let x = 0; x < listItems.length; x++){
    //Remove
    listItems[x].children[0].addEventListener('click', () => {
      listItems[x].remove();
    });
    //Stike
    listItems[x].children[2].addEventListener('click', () => {
      listItems[x].children[1].classList.add('strike');
      listItems[x].children[2].style.color = "green";
    });
    //Drag Properties
    listItems[x].addEventListener("dragstart", dragStartHandler);
    listItems[x].addEventListener("dragend", dragEndHandler);
  };
};

//-----------------------------------------------------------------------------
//Add Todo to Page on Click ---------------------------------------------------
//-----------------------------------------------------------------------------
let count = 0;
buttonNew.addEventListener('click', addTodo);
function addTodo(){
  if(!inputTodo.value){
    inputTodo.classList.add('emptyEffect');
    inputTodo.setAttribute('placeholder', "please enter a todo");
  } else {
    inputTodo.classList.remove('emptyEffect');
    inputTodo.setAttribute('placeholder', "add todos!");
    //Add Item to List
    if(count >= 0 ){
      let listItem = document.createElement('div');
      listItem.setAttribute('class', 'list-item');
      listItem.setAttribute('draggable', 'true');
      let span1 = document.createElement('span');
      span1.setAttribute('class', 'fas fa-trash-alt');
      let paragraph = document.createElement('p');
      paragraph.setAttribute('class', 'insert');
      let span2 = document.createElement('span');
      span2.setAttribute('class', 'far fa-check-circle');
      listItem.appendChild(span1);
      listItem.appendChild(paragraph);
      listItem.appendChild(span2);
      listItem.setAttribute('id', count);

      start.insertAdjacentElement('beforeend', listItem);

      count++;
    };
    //Only Insert New Items in Start
    let startList = start.querySelectorAll('.insert');
    startList[startList.length - 1].innerText = inputTodo.value;
    //Make Input Blank on Addition
    inputTodo.value = "";
    //Rerun to Add Listeners to new Items
    addListeners();
  };
};

//-----------------------------------------------------------------------------
//Drag Functions --------------------------------------------------------------
//-----------------------------------------------------------------------------
//Add Function to Target (divs)
function dragStartHandler(e){

  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';

  //Make Original not Visible (avoid double effect)
  setTimeout( () => {
    this.classList.add('visible');
  }, 0);

};

function dragEndHandler(e){
  this.classList.remove('visible');
};

//Initialize Drop Zones
const start = document.getElementById('js-start');
const end = document.getElementById('js-end');
window.addEventListener('DOMContentLoaded', () => {

  start.addEventListener("dragover", dragOverHandler);
  end.addEventListener("dragover", dragOverHandler);
  end.addEventListener("drop", dropHandler);
  start.addEventListener("drop", dropHandler);

});

//Drop Zone Functions
function dragOverHandler(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
};

function dropHandler(e){
  e.preventDefault();
  var elID = e.dataTransfer.getData('text/plain');
  var element = document.getElementById(elID);
  this.appendChild(element);
  //Make it Visible
  element.classList.remove('visible');
};

//-----------------------------------------------------------------------------
//Reset Function --------------------------------------------------------------
//-----------------------------------------------------------------------------
const resetButton = document.getElementById('js-reset');
resetButton.addEventListener('click', reset);
function reset(){
  const endList = end.querySelectorAll('.list-item');
  for(let x = 0; x < endList.length; x++){
    start.appendChild(endList[x]);
  };
};