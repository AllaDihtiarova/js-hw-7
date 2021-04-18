const elemRef = document.querySelectorAll("li.item").length
console.log(`В списке ${elemRef} категории.`)

const listEl = document.querySelectorAll("li.item").forEach((child) =>
  console.log(
    `Категория: ${child.children[0].textContent} 
    Колличество елементов: ${child.children[1].children.length}`
  )
)
