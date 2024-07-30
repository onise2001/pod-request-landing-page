const requestButton = document.querySelector(".request-button");
const emailInput = document.querySelector("input");
const emailError = document.querySelector(".email-error");

requestButton.addEventListener("click", () => {
  if (/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    emailInput.value = "";
    emailError.classList.add("hide");
  } else {
    emailError.classList.remove("hide");
  }
});
