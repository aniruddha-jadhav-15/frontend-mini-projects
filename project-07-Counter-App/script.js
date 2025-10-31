// seclect element
let increaseBtn = document.querySelector("#increase");
let resetBtn = document.querySelector("#reset");
let decreaseBtn = document.querySelector("#decrease");
let h3 = document.querySelector("h3");

// Value
let count = 0;

// Increase
increaseBtn.addEventListener("click", () => {
  count++;
  update();
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  count--;
  update();
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  update();
});

// upadet

function update() {
  h3.textContent = count;
  //   Color change

  if (count > 0) h3.style.color = "rgba(0, 128, 0, 0.612)";
  else if (count < 0) h3.style.color = "rgba(255, 0, 0, 0.612)";
  else h3.style.color = "rgba(212, 212, 13, 0.765)";
}
