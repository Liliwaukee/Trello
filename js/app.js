
var container = document.getElementById('container');


//esta funcion carga los elementos de la primer versión
var load = function () {

var logo = document.createElement('img');
var dashboardTitle = document.createElement('h3');
var form = document.createElement('form');
var addList = document.createElement('input');
var navBar = document.getElementById('navbar');
var dashboardSection = document.getElementById('dashboard');


var trelloIconContainer = document.createElement('div');
var trelloIcon = document.createElement('i');
var dashboardsIconText = document.createElement('span');
var searchContainer = document.createElement('div');
var searchIcon = document.createElement('i');
var logo = document.createElement('img');
var plusContainer = document.createElement('div');
var plusIcon = document.createElement('i');
var clockContainer = document.createElement('div');
var clockIcon = document.createElement('i');
var bellContainer = document.createElement('div');
var bellIcon = document.createElement('i');
var dashboardTitle = document.createElement('h3');
var starIcon = document.createElement('i');
var starContainer = document.createElement('div');
var lockContainer = document.createElement('div');
var lockIcon = document.createElement('i');
var privateText = document.createElement('span');
var ellipsisContainer = document.createElement('div');
var ellipsisIcon = document.createElement('i');
var showMenuText = document.createElement('span');

logo.classList.add('logo');
logo.src = 'assets/img/trello-logo-white.svg';
dashboardTitle.innerText = 'Tablero - Retos de código'
dashboardTitle.classList.add('dashboard-title');
addList.classList.add('add-list');
addList.placeholder = 'Añadir una lista...';

navBar.appendChild(logo);
dashboardSection.appendChild(dashboardTitle);
container.appendChild(form);
form.appendChild(addList);


trelloIconContainer.classList.add('trello-icon-container');
trelloIcon.classList.add('fa');
trelloIcon.classList.add('fa-trello');
trelloIcon.setAttribute('area-hidden','true');
dashboardsIconText.classList.add('dashboards-icon-text');
dashboardsIconText.innerText = 'Tableros';
searchContainer.classList.add('search-container');
searchIcon.classList.add('fa');
searchIcon.classList.add('fa-search');
searchIcon.setAttribute('area-hidden','true');
plusContainer.classList.add('plus-container');
plusIcon.classList.add('fa');
plusIcon.classList.add('fa-plus');
plusIcon.setAttribute('area-hidden','true');
clockContainer.classList.add('clock-container');
clockIcon.classList.add('fa');
clockIcon.classList.add('fa-clock-o');
clockIcon.setAttribute('area-hidden','true');
bellContainer.classList.add('bell-container');
bellIcon.classList.add('fa');
bellIcon.classList.add('fa-bell-o');
bellIcon.setAttribute('area-hidden','true');
dashboardTitle.innerText = 'Tablero - Retos de código'
dashboardTitle.classList.add('dashboard-title');
starContainer.classList.add('star-container');
starIcon.classList.add('fa');
starIcon.classList.add('fa-star-o');
starIcon.setAttribute('area-hidden','true');
lockContainer.classList.add('lock-container');
lockIcon.classList.add('fa');
lockIcon.classList.add('fa-lock');
lockIcon.setAttribute('area-hidden','true');
privateText.innerText = 'Privado';
privateText.classList.add('private-text')

ellipsisContainer.classList.add('ellipsis-container');
ellipsisIcon.classList.add('fa');
ellipsisIcon.classList.add('fa-ellipsis-h');
ellipsisIcon.setAttribute('area-hidden','true');
showMenuText.innerText = 'Mostrar menú';
showMenuText.classList.add('show-menu-text')
navBar.appendChild(trelloIconContainer);
trelloIconContainer.appendChild(trelloIcon);
trelloIconContainer.appendChild(dashboardsIconText);
navBar.appendChild(searchContainer);
searchContainer.appendChild(searchIcon);
navBar.appendChild(logo);
navBar.appendChild(plusContainer);
plusContainer.appendChild(plusIcon);
navBar.appendChild(clockContainer);
clockContainer.appendChild(clockIcon);
navBar.appendChild(bellContainer);
bellContainer.appendChild(bellIcon);
dashboardSection.appendChild(dashboardTitle);
dashboardSection.appendChild(starContainer);
starContainer.appendChild(starIcon);
dashboardSection.appendChild(lockContainer);
lockContainer.appendChild(lockIcon);
lockContainer.appendChild(privateText);
dashboardSection.appendChild(ellipsisContainer);
ellipsisContainer.appendChild(ellipsisIcon);
ellipsisContainer.appendChild(showMenuText);



// borra el display añadir lista

  var deleteAddList = function () {
      addList.style.display = 'none';
  }

  addList.addEventListener('click', deleteAddList);


// funcion crear caja trello

  var trelloBox = function () {
    var newTask = document.createElement('div');
    var formNewTask = document.createElement('form');
    var inputNewTask = document.createElement('input');
    var addButton = document.createElement('button');
    var deleteNewTask = document.createElement('span');

    addButton.type = 'submit';
    addButton.innerText = 'Guardar';
    addButton.id = 'boton-guardar';
    inputNewTask.placeholder = 'Añadir una lista...';
    inputNewTask.id ='input-new-task';
    inputNewTask.value = '';
    deleteNewTask.innerText = 'X';
    addList.classList.add('add-list');
    newTask.classList.add('new-task');
    inputNewTask.classList.add('input-new-task');
    deleteNewTask.classList.add('delete-new-task');
    addButton.classList.add('add-button');
    inputNewTask.autofocus = true;

    container.appendChild(newTask);
    newTask.appendChild(formNewTask);
    formNewTask.appendChild(inputNewTask);
    formNewTask.appendChild(addButton);
    formNewTask.appendChild(deleteNewTask);


      var saveTaskName = function () {
        event.preventDefault();
        var titleTaskName = inputNewTask.value;
        var title = document.createElement('h4');
        var addTask = document.createElement('p');
        var anchorTask = document.createElement('a');

        title.classList.add('title');
        title.innerText = titleTaskName;
        inputNewTask.style.display = 'none';
        addButton.style.display = 'none';
        deleteNewTask.style.display = 'none';
        anchorTask.id = 'anchor-task';
        anchorTask.setAttribute('href','#');
        addTask.innerHTML = 'Añadir una tarea...';
        addTask.classList.add('add-task');
        newTask.appendChild(title);
        newTask.appendChild(anchorTask);
        anchorTask.appendChild(addTask);

        trelloBox();

        var formTA = function (){
          addTask.style.display= 'none';
          var addTAButton = document.createElement('button');
          var addTATextarea = document.createElement('textarea');
          var addTADelete = document.createElement ('span');
          var addTAOptions = document.createElement ('span');

          addTAButton.innerText = 'Añadir';
          addTAButton.classList.add('ta-button'),
          addTATextarea.cols = '15';
          addTATextarea.rows = '5';
          addTATextarea.autofocus;
          addTADelete.innerText = 'X';
          addTAOptions.innerText = '...';
          addTATextarea.id = 'ta-content';

          addTADelete.classList.add('delete');
          addTAOptions.classList.add('options');

          newTask.appendChild(addTATextarea);
          newTask.appendChild(addTAButton);
          newTask.appendChild(addTADelete);
          newTask.appendChild(addTAOptions);


            var fixTA = function(){
              var contentTA = addTATextarea.value;
              var contentParagraph = document.createElement('p');
              contentParagraph.innerText = contentTA;
              contentParagraph.classList.add('content-paragraph');
              newTask.appendChild(contentParagraph);
              newTask.insertBefore(contentParagraph,addTATextarea);
              clearTextarea();
            }

            addTAButton.addEventListener('click',fixTA);

            var clearTextarea = function(){
              addTATextarea.value = '';
            }

      }

      addTask.addEventListener('click',formTA);

    }

    addButton.addEventListener('click',saveTaskName);

  }

  addList.addEventListener('click', trelloBox);

}
