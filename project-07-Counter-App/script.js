// seclect element
let increaseBtn = document.querySelector("#increase");
let resetBtn = document.querySelector("#reset");
let decreaseBtn = document.querySelector("#decrease");
let h3 = document.querySelector("h3");

// counter value
let count = 0;

// Increase button click
increaseBtn.addEventListener("click", () => {
  count++;
  update();
});

// Decrease button click
decreaseBtn.addEventListener("click", () => {
  count--;
  update();
});

// Reset button click
resetBtn.addEventListener("click", () => {
  count = 0;
  update();
});

// keyboard support — +/- to change count, r to reset
document.addEventListener("keydown", (evt) => {
  if (evt.key === "+") {
    // only increase if below max limit
    if (count < 10) {
      count++;
      update();
    }
  } else if (evt.key === "-") {
    // only decrease if above min limit
    if (count > 0) {
      count--;
      update();
    }
  } else if (evt.key === "r") {
    count = 0;
    update();
  }
});

// update UI — change count display, color and button states
function update() {
  h3.textContent = count;

  // color feedback based on count value
  if (count > 0) h3.style.color = "rgba(0, 128, 0, 0.612)";
  else if (count < 0) h3.style.color = "rgba(255, 0, 0, 0.612)";
  else h3.style.color = "rgba(212, 212, 13, 0.765)";

  // disable/enable buttons based on min/max limits
  if (count === 0) {
    decreaseBtn.disabled = true;
    increaseBtn.disabled = false;
  } else if (count === 10) {
    increaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
    increaseBtn.disabled = false;
  }
}
