document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector(".inputAdd");
  const addButton = document.querySelector(".inputBtn");
  const todoList = document.querySelector(".tasks ul");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((element) => renderTasks(element));

  addButton.addEventListener("click", (e) => {
    const newtask = taskInput.value.trim();
    if (newtask === "") return;
    else {

      tasks.push(newtask);

      saveLocal();

      renderTasks(newtask);

      taskInput.value = "";
    }
  });

  function saveLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks(task) {
    const li = document.createElement("li");

    li.innerHTML = `
    <span>${task}</span>
    <button>remove</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      if (li.classList.contains("completed")) {
        li.classList.remove("completed");
      } else {
        li.classList.add("completed");
      }
    });

    li.querySelector("button").addEventListener("click", (e) => {
      tasks = tasks.filter((t) => t !== task);
      //   li.remove();
      console.log(tasks);
      li.remove();
      saveLocal();
    });

    todoList.appendChild(li);
  }
});
