function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpan = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.background = randomColor;
  colorSpan.textContent = randomColor;
});