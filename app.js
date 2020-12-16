const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#todo');
const input = document.querySelector('input[type="text"]');
const saved = localStorage.getItem("todoList");
const ronnies = document.querySelectorAll("audio");

function play() {
    const random = Math.floor(Math.random() * 4);
    ronnies[random].play();
}

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
        play();
        if (todoList.innerText === "") {
            alert("You did it! A job well done :)");
        }
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


