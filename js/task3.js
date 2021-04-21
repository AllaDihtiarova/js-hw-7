const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]

const imagesEl = document.querySelector("#gallery")
imagesEl.classList.add("list-images")
const elements = images.map((element) => {
  const elem = document.createElement("img")
  const item = document.createElement("li")
  item.appendChild(elem)
  elem.src = element.url
  elem.alt = element.alt
  elem.width = 500
  elem.height = 300

  console.log(item)
  return item
})

imagesEl.append(...elements)

insertAdjacentHTML
