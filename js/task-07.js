const fontSizeEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeEl.addEventListener("input", sizeChange);
function sizeChange() {
  const fontSize = fontSizeEl.value;
  text.style.fontSize = `${fontSize}px`;
}
sizeChange();