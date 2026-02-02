const addTaskBtn = document.querySelector("#task-add");
const list = document.querySelector(".list");
const input = document.querySelector("input");
const alertContainer = document.querySelector(".alert-container");

addTaskBtn.addEventListener("click", createElm);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createElm();
  }
});

function createElm() {
  if (input.value.trim() === "") {
    alertContainer.classList.add("active");

    setTimeout(() => {
      alertContainer.classList.remove("active");
    }, 2000);
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");

    li.append(icon);
    list.appendChild(li);

    input.value = "";
    input.focus();

    // completeTask
    li.addEventListener("click", completeTask);

    // Delete
    let deleteIcon = li.querySelector("i");
    deleteIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
    });
  }
}

function completeTask(e) {
  e.currentTarget.classList.toggle("completed");
}
