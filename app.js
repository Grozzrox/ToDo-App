const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#todo');
const input = document.querySelector('input[type="text"]');

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newItem = document.createElement('li');
    const newBtn = document.createElement('button');
    newBtn.innerText = "Remove";
    newItem.innerText = `${input.value} `;
    newItem.appendChild(newBtn);
    todoList.appendChild(newItem);
})