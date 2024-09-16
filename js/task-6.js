function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    let markup = '';
    let size = 30;

    for (let i = 0; i < amount; i++) {
        markup += `
            <div style="
                width: ${size}px;
                height: ${size}px;
                background-color: ${getRandomHexColor()};
                margin: 5px;
            "></div>
        `;
        size += 10;
    }

    boxesContainer.innerHTML = markup; 
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
}


document.querySelector('[data-create]').addEventListener('click', () => {
    const input = document.querySelector('#controls input');
    const amount = parseInt(input.value, 10);
    console.log(input)

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
