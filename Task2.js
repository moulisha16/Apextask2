const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  input.value = '';
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.addEventListener('click', e => {
    e.stopPropagation(); // Prevent toggling on delete click
    li.remove();
  });

  li.appendChild(btn);
  list.appendChild(li);
}
