const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


let num1 = null, 
num2 = null,
operator = null;


const btns = [...document.querySelectorAll('button')];
btns.forEach(btn => btn.addEventListener('click', () => {
    //if it is a number button
    if(btn.id.startsWith('n')){
        if(!num1){
            num1 = +btn.id[1] //change to a num from a string + assign it
            console.log(num1)
        }
        
    }
    //if it is an operator button
    if(btn.id.startsWith('o')){

        console.log('operator')
    }
}));







function operation(num1, operator, num2) {
    switch(operator){
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2)
            break;
        case 'divide':
            return divide(num1, num2)
            break;
    }
}


let result = add(num1,num2);
