const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]
const ingredientsEl = document.querySelector("#ingredients")
const elements = ingredients.map((element) => {
  const elem = document.createElement("li")
  elem.textContent = element
  return elem
})

ingredientsEl.append(...elements)
