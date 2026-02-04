const btnEl = document.querySelector(".btn");
const inptEl = document.querySelector(".input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContaier = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  cretatePassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inptEl.value) {
    alertContaier.classList.remove("active");

    setTimeout(() => {
      alertContaier.classList.add("active");
    }, 2000);
  }
});

function cretatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";

  // Genarte password
  for (let i = 0; i < passwordLength; i++) {
    const randumNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randumNum, randumNum + 1);
  }

  inptEl.value = password;
  alertContaier.innerText = `${password}  Copied!`;
}

function copyPassword() {
  inptEl.select();
  inptEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inptEl.value);
}
