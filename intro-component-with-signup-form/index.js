const form = document.querySelector("form");
const firstNameField = document.querySelector("#firstName");
const lastNameField = document.querySelector("#lastName");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const invalidClass = "invalid";

function clearInvalid(event) {
  event.target.classList.remove(invalidClass);
  event.target.parentNode.nextElementSibling.textContent = "";
}

function checkLength(inputField) {
  const { value, placeholder } = inputField;

  if (!value.length) {
    inputField.classList.add(invalidClass);
    inputField.parentNode.nextElementSibling.textContent = `${placeholder} cannot be empty`;

    return false;
  }

  return true;
}

function validateFirstName(firstNameField) {
  return checkLength(firstNameField);
}

function validateLastName(lastNameField) {
  return checkLength(lastNameField);
}

function checkEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

function validateEmail(emailField) {
  if (!checkLength(emailField)) {
    return false;
  }

  if (!checkEmail(emailField.value)) {
    emailField.classList.add(invalidClass);
    emailField.parentNode.nextElementSibling.textContent =
      "Looks like this is not an email";

    return false;
  }

  return true;
}

function validatePassword(passwordField) {
  return checkLength(passwordField);
}

function submitForm(event) {
  event.preventDefault();

  validateFirstName(firstNameField);
  validateLastName(lastNameField);
  validateEmail(emailField);
  validatePassword(passwordField);

  if (
    validateFirstName(firstNameField) &&
    validateLastName(lastNameField) &&
    validateEmail(emailField) &&
    validatePassword(passwordField)
  ) {
    form.reset();
    alert("You have successfully claimed the free trial.");
  }
}

form.addEventListener("submit", submitForm);
firstNameField.addEventListener("input", clearInvalid);
lastNameField.addEventListener("input", clearInvalid);
emailField.addEventListener("input", clearInvalid);
passwordField.addEventListener("input", clearInvalid);
