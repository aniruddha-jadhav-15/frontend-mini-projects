let inputBox = document.querySelector("#input-box");

let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    if (evt.target.innerText == "=") {
      string = eval(string);
      inputBox.value = string;
    } else if (evt.target.innerText == "AC") {
      string = "";
      inputBox.value = string;
    } else if (evt.target.innerText == "DEL") {
      string = string.toString();
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      string = string + evt.target.innerText;
      inputBox.value = string;
    }
  });
});
