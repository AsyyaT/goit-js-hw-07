 function updateGreeting() {
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');
    const name = input.value.trim();

    if (name === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = name;
    }
}

document.getElementById('name-input').addEventListener('input', updateGreeting);
