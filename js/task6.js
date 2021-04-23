const validationInputEl = document.querySelector("#validation-input")
validationInputEl.addEventListener("blur", onValidationInputEl)

function onValidationInputEl(event) {
  if (event.currentTarget.value.length !== Number(validationInputEl.dataset.length)) {
    validationInputEl.classList.add("invalid")
  } else {
    validationInputEl.classList.add("valid")
  }
}
