import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const button = document.querySelector('button');
class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const todos = [
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
          <input type="checkbox">
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

window.addEventListener('load', () => {
  populate();
});