const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendInput(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('%', '/100'));
    } catch (error) {
        display.textContent = 'Error';
    }
}        