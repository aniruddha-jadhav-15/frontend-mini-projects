const btnEl = document.querySelector(".btn");
const inptEl = document.querySelector(".input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContaier = document.querySelector(".alert-container");

// Handle password generation when button is clicked
btnEl.addEventListener("click", () => {
  cretatePassword();
});

// Copy generated password to clipboard and show success alert
copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inptEl.value) {
    alertContaier.classList.remove("active");

    setTimeout(() => {
      alertContaier.classList.add("active");
    }, 2000);
  }
});

// Generate random password using characters, numbers, and symbols
function cretatePassword() {
  // Store all possible characters for password generation
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";

  // Generate password dynamically using random characters
  for (let i = 0; i < passwordLength; i++) {
    // Generate random index based on chars length
    const randumNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randumNum, randumNum + 1);
  }

  // Update input field with generated password
  inptEl.value = password;
  alertContaier.innerText = `${password}  Copied!`;
}

// Copy password directly to user's clipboard
function copyPassword() {
  navigator.clipboard.writeText(inptEl.value);
}
