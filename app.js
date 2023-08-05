const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const display = document.querySelector('#display');
let num1 = null;
let num2 = null;
let operator = null;

const btns = [...document.querySelectorAll('button')];
btns.forEach(btn => btn.addEventListener('click', () => {
    //if it is a number button
    if (btn.id.startsWith('n')) {
        if(operator === 'Divide' && btn.id === 'n0'){
            reset()
            display.textContent = 'Cannot divide by 0, please clear'

        }
        else if (display.textContent === "0") {
            display.textContent = btn.id[1];
        } else {
            display.textContent += btn.id[1];
        }
    }

    //if it is an operator button
    if (btn.id.startsWith('o')) {
        if (!num1) {
            num1 = +display.textContent;
            display.textContent = 0;

            operator = btn.id.slice(1);
        } else {
            num2 = +display.textContent;
            num1 = operation(num1, operator, num2);
            display.textContent = 0;
            operator = btn.id.slice(1);
            num2 = null; // Reset num2 for the next operation
        }
    }

    //if it is the equal button
    if (btn.id.startsWith('e')) {
        if (!num2) {
            num2 = +display.textContent;
        }
        const answer = operation(num1, operator, num2);
        display.textContent = answer;
        num1 = answer; // Set num1 to the answer in case the user wants to continue with another operation
        num2 = null; // Reset num2 for the next operation
        operator = null; // Reset the operator
    }
    if(btn.id === 'clear'){
        reset()


    }
}));

function reset() {
    num1 = null;
    num2 = null;
    operator = null;
    display.textContent = 0;
}

function operation(num1, operator, num2) {
    switch(operator){
        case 'Add':
            return add(num1, num2);
            break;
        case 'Subtract':
            return subtract(num1, num2);
            break;
        case 'Multiply':
            return multiply(num1, num2)
            break;
        case 'Divide':
            return divide(num1, num2)
            break;
    }
}

