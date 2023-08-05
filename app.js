const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


let num1 = null, 
num2 = null,
operator = null;

const display = document.querySelector('#display');
let displayValue = 0;
// +btn.id[1] //change to a num from a string

const btns = [...document.querySelectorAll('button')];
btns.forEach(btn => btn.addEventListener('click', () => {
    //if it is a number button
    if(btn.id.startsWith('n')){
        if(displayValue === 0){
            displayValue = btn.id[1];
            display.textContent = btn.id[1];
        } else {
            displayValue += btn.id[1];
            display.textContent += btn.id[1];
        }
        
    }
    //if it is an operator button
    if(btn.id.startsWith('o')){
        if(!num1){
            num1 = +displayValue;
            operator = btn.id.slice(1);
            displayValue = 0;
            display.textContent = displayValue;

        } else {
            num2 = +displayValue;
            let answer = operation(num1, operator, num2);
            displayValue = answer;
            display.textContent = answer;
        }
    if(btn.id.startsWith('e')){
        num2 = +displayValue;
        let answer = operation(num1, operator, num2);
        displayValue = answer;
        display.textContent = answer;
    }

        

        
    }
}));







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


let result = add(num1,num2);
