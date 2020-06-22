const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const emailSubmitBtn = document.querySelector("#email-submit-btn");
const helpText = document.querySelector(".help-text");

function checkLength(input) {
  return Boolean(input.length);
}

function emailValidation(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function resetHelpMessage() {
  emailInput.parentNode.classList.remove("has-error");
  helpText.style.color = "";
  helpText.textContent = "";
}

function showErrorMessage(message) {
  helpText.style.color = "lightcoral";
  helpText.textContent = message;
  emailInput.parentNode.classList.add("has-error");
  emailInput.focus();
}

function showSuccessMessage(message) {
  helpText.style.color = "forestgreen";
  helpText.textContent = message;
  emailInput.value = "";
  emailSubmitBtn.blur();

  setTimeout(resetHelpMessage, 3000);
}

function submitForm(event) {
  event.preventDefault();

  if (!checkLength(emailInput.value)) {
    showErrorMessage("Please provide email");
    return;
  }

  if (!emailValidation(emailInput.value)) {
    showErrorMessage("Please provide a valid email");
    return;
  }

  showSuccessMessage("We have received your email");
  return;
}

form.addEventListener("submit", submitForm);
emailInput.addEventListener("input", resetHelpMessage);
