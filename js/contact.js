document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-container");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorFormatEmail = document.getElementById("errorFormatEmail");
  const errorPhone = document.getElementById("errorPhone");
  const errorMessage = document.getElementById("errorMessageUser");
  const errorSubmit = document.getElementById("errorSubmit");

  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-button");

  function validateName() {
    if (nameInput.value.trim() === "") {
      errorName.hidden = false;
      return false;
    }
    errorName.hidden = true;
    return true;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
      errorEmail.hidden = false;
      errorFormatEmail.hidden = true;
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      errorEmail.hidden = true;
      errorFormatEmail.hidden = false;
      return false;
    }
    errorEmail.hidden = true;
    errorFormatEmail.hidden = true;
    return true;
  }

  function validatePhone() {
    if (phoneInput.value.trim() === "") {
      errorPhone.hidden = false;
      return false;
    }
    errorPhone.hidden = true;
    return true;
  }

  function validateMessage() {
    if (messageInput.value.trim().length < 5) {
      errorMessage.hidden = false;
      return false;
    }
    errorMessage.hidden = true;
    return true;
  }

  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    const allValid = isNameValid && isEmailValid && isPhoneValid && isMessageValid;

    errorSubmit.hidden = allValid;
    return allValid;
  }

  // Mostrar modal si el formulario es válido
  document.getElementById("submitForm").addEventListener("click", function () {
    if (validateForm()) {
      modal.style.display = "block";
      form.reset();
    }
  });

  // Cerrar modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Activar validaciones individuales al salir del campo
  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  phoneInput.addEventListener("blur", validatePhone);
  messageInput.addEventListener("blur", validateMessage);
});
