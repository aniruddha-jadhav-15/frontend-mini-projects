let inputBox = document.querySelector("#input-box");

let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    try {
      if (evt.target.innerText == "=") {
        if (inputBox.value === "") {
          inputBox.value = "Enter something first";
          return;
        }
        // Using Function() instead of eval() for safer expression evaluation
        // eval() is dangerous — it can execute malicious code from user input
        string = Function('"use strict"; return (' + string + ")")();
        if (string === Infinity) {
          inputBox.value = "Can't divide by 0";
          string = "";
          return;
        }
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
    } catch (error) {
      inputBox.value = "Error";
      string = "";
    }
  });
});
