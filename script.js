const displayNextpage = document.querySelector(".btn-display");
const backToPage = document.querySelector(".arrow");
const emailWrapper = document.querySelector(".email__wrapper");
const passwordWrapper = document.querySelector(".password__wrapper");
const alertMessage = document.querySelector(".alert");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const userId = document.querySelector(".user-id");
const showPassword = document.querySelector(".btn--show");

console.log(email);

function toggleDisplay() {
  passwordWrapper.classList.toggle("display-none");
  emailWrapper.classList.toggle("display-none");
}

displayNextpage.addEventListener("click", function () {
  if (email.value === "") {
    alertMessage.classList.toggle("display-none");
    email.style.marginBottom = "2px";
    email.classList.toggle("alert--border");
  } else {
    toggleDisplay();
    userId.textContent = email.value;
  }
});

backToPage.addEventListener("click", toggleDisplay);

showPassword.addEventListener("click", function () {
  if (showPassword.textContent === "Show") {
    password.setAttribute("type", "text");
    showPassword.textContent = "Hide";
  } else {
    password.setAttribute("type", "password");
    showPassword.textContent = "Show";
  }
});
