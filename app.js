const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#todo');
const input = document.querySelector('input[type="text"]');
const saved = localStorage.getItem("todoList");

if (saved) {
    todoList.innerHTML = saved;
}

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        localStorage.setItem("todoList", todoList.innerHTML);
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        localStorage.setItem("todoList", todoList.innerHTML);
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
    localStorage.setItem("todoList", todoList.innerHTML);
})
