function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
    const body = document.body;
    const colorSpan = document.querySelector('.color');
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorSpan.textContent = `Current color: ${newColor}`;
}

document.querySelector('.change-color').addEventListener('click', changeBackgroundColor);
