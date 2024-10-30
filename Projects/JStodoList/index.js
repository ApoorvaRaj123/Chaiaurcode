document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.querySelector(".inputAdd");
  const addButton = document.querySelector(".inputBtn");
  const list = document.querySelector(".tasks ul");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task))

  addButton.addEventListener("click", (e) => {
    const taskText = newTask.value.trim();
    if (taskText === "") return;
    else {
      const obj = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };

      tasks.push(obj);

      save();
      location.reload();
      newTask.value = "";
    }
    // const task = e.target
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if(task.completed) li.classList.add("completed");

    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener("click", (e) =>{
      if (e.target.tagName === "BUTTON") return; 
      task.completed = !task.completed;
      li.classList.toggle("completed");
      save();
    });

    li.querySelector("button").addEventListener("click", (e) =>{
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      save();
      console.log(e)
    })

    list.appendChild(li)
  }

  function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
