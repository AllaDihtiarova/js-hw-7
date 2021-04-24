const validationInputEl = document.querySelector("#validation-input")
validationInputEl.addEventListener("blur", onValidationInputEl)
validationInputEl.addEventListener("focus", onValidationOutputEl)

function onValidationInputEl(event) {
  if (event.currentTarget.value.length !== Number(validationInputEl.dataset.length)) {
    validationInputEl.classList.add("invalid")
  } else {
    validationInputEl.classList.add("valid")
  }
}

function onValidationOutputEl(event) {
  validationInputEl.classList.remove("invalid")
}
