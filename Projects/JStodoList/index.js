const newTask = document.querySelector(".inputAdd");
const addButton = document.querySelector(".inputBtn");
const list = document.querySelector(".tasks ul");


let tasks = [];


addButton.addEventListener("click", (e) => {
  if (newTask.value === "") return;
  else {
    localStorage.setItem("task", newTask.value);
    tasks.push(newTask.value);
  }
  // const task = e.target
});

function renderTasks() {}
