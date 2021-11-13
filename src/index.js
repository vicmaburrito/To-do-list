import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import update from './update';

const button = document.querySelector('button');
class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let todos = [
  new Todo('Wash the dishes', false, 0),
  new Todo('Complete To Do list project', false, 1),
];

function populate() {
  todos.sort((a, b) => (a.index > b.index ? 1 : -1));
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="flex">
      <div>
          <input type="checkbox" class="checkbox"
          ${todo.completed ? 'checked' : ''}>
          <span>${todo.description}</span>
      </div>
      <span class="material-icons">
          more_vert
      </span>
    </div>
    <hr>`;

    button.parentElement.insertBefore(li, button);
  });
}

function saveTodosLocally() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addEventsToCheckboxes() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      update(todos[index]);
      saveTodosLocally();
    });
  });
}

window.addEventListener('load', () => {
  const oldTodos = JSON.parse(localStorage.getItem('todos'));
  if (oldTodos) {
    todos = oldTodos;
  }
  populate();
  addEventsToCheckboxes();
});