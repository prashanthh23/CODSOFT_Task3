let input = '';

function appendToDisplay(value) {
    input += value;
    document.getElementById('display').value = input;
}

function clearDisplay() {
    input = '';
    document.getElementById('display').value = '';
}

function operate(operator) {
    if (input.length > 0 && '+-*/'.includes(input[input.length - 1])) {
        input = input.slice(0, -1); 
    }
    appendToDisplay(operator);
}

function calculate() {
    try {
        input = eval(input).toString();
        document.getElementById('display').value = input;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
