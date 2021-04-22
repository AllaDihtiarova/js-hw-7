let counterValue = 0

const container = document.querySelector("#counter")
let total = document.querySelector("#value")

const refs = {
  decrementBtn: container.firstElementChild,
  incrementBtn: container.lastElementChild,
}

refs.decrementBtn.addEventListener("click", onDecrementBtn)
refs.incrementBtn.addEventListener("click", onIncrementBtn)

function onDecrementBtn() {
  total.textContent = counterValue -= 1
}

function onIncrementBtn() {
  total.textContent = counterValue += 1
}
