let fontSize = 10;
const text = document.getElementById("text");
const sizeLabel = document.getElementById("size-label");

function changeFontSize(delta) {
  const newSize = fontSize + delta;
  if (newSize >= 10 && newSize <= 50) {
    fontSize = newSize;
    text.style.fontSize = fontSize + "px";
    sizeLabel.textContent = fontSize + "px";
  }
}
