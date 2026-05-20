const addTaskBtn = document.querySelector("#task-add");
const list = document.querySelector(".list");
const input = document.querySelector("input");
const alertContainer = document.querySelector(".alert-container");

let todos = [];

// save todo in array
function saveTodo() {
  const todoTask = {
    text: input.value,
    completed: false,
  };
  todos.push(todoTask);
}

// render todos on screen
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo.text;

    // show completed state
    if (todo.completed) {
      li.classList.add("completed");
    }

    // delete icon
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    li.append(icon);

    list.appendChild(li);

    // complete task
    li.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveToLocal();
      renderTodos();
    });

    // delete task
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveToLocal();
      renderTodos();
    });
  });
}

// add task
addTaskBtn.addEventListener("click", handleAddTask);

// enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAddTask();
  }
});

// handle add task — checks empty input, saves and renders todo
function handleAddTask() {
  if (input.value.trim() === "") {
    emptyTodo();
  } else {
    saveTodo();
    saveToLocal();
    renderTodos();
    input.value = "";
    input.focus();
  }
}

// Empty Todos
function emptyTodo() {
  alertContainer.classList.add("active");

  setTimeout(() => {
    alertContainer.classList.remove("active");
  }, 2000);
}

function saveToLocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromLocal() {
  const data = localStorage.getItem("todos");

  if (data) {
    todos = JSON.parse(data);
    renderTodos();
  }
}

loadFromLocal();
