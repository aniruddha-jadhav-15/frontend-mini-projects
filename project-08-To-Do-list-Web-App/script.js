let addTaskBtn = document.querySelector("#task-add");
let list = document.querySelector(".list");
let input = document.querySelector("input");

function createElm(params) {
  if (input.value === "") {
    alert("Enter a Value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    list.appendChild(li);

    input.value = "";

    // completed
    li.addEventListener("dblclick", complet);

    // Delete
    let deleteIcon = li.querySelector("i");
    deleteIcon.addEventListener("click", function () {
      li.remove();
    });
  }
}

function complet(e) {
  e.target.classList.toggle("completed");
}

addTaskBtn.addEventListener("click", createElm);
