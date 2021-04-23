const nameInputEl = document.querySelector("#name-input")
const nameOutputEl = document.querySelector("#name-output")

nameInputEl.addEventListener("input", onInputElSubmit)

function onInputElSubmit(event) {
  nameOutputEl.textContent = event.currentTarget.value
}
