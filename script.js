let display = document.getElementById('screen');
let parent = document.querySelector('.btn-container');
let clear = document.querySelector('.clear-btn');
let backspace = document.querySelector('.backspace');
let number1 = '', number2 = '';
let operator;

// adition functon expression
let addition = function(num1, num2){
    return num1 + num2;
};

//subtraction function expression
let subtraction = function(num1, num2){
    return num1 - num2;
};

//multiplication function expression
let multiply = function(num1, num2){
    return num1 * num2;
};

//division function expression
let division = function(num1, num2){
    if(num1 === 0 || num2 === 0){
        alert('fuck u. No diving with zero.');
    } else{
        return num1 / num2;
    }
};

//modulo function expression
let modulo = function(num1, num2){
    if(num1 === 0 || num2 === 0){
        alert('fuck u. No diving with zero.');
    } else{
        return (num1 - (Math.floor(num1 / num2) * num2));
    }
};

// function that decides which operation should take place depending on the entered operator
let operate = function(num1, num2, operator){
    if(operator === '+'){
        return addition(num1, num2);
    } else if(operator === '-'){
        return subtraction(num1, num2);
    } else if(operator === '*'){
        return multiply(num1, num2);
    } else if(operator === '%'){
        return modulo(num1, num2);
    } else return division(num1, num2);
};

// function that displays value of button
let displayValue = function(value){
    display.textContent += ` ${value} `;
    if(value.charCodeAt(0) === 8){
        display.textContent = 'potato';                                /////////////////////////////
    } else if(value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57){
        if(number1 === ''){
            number1 = value;
            console.log('number1: ' + number1);
        } else{
            number2 += value;
            console.log('number2: ' + number2);
        }
    } else if((value.charCodeAt(0) === 37) || (value.charCodeAt(0) >= 42 && value.charCodeAt(0) <= 47)){
        operator = value;
        console.log('operator: ' + operator);
    } else if(value.charCodeAt(0) === 61){
        display.textContent = operate(parseInt(number1), parseInt(number2), operator);
        number1 = display.textContent;
        console.log('num1: ' + number1);
        if(number2){
            number2 = '';
        }
        console.log('num2: ' + number2);
    } else if(clear){
        display.textContent = '';
        number1 = '';
        number2 = '';
        operator = '';
    } else {console.log('no condition match' + value);}
};


// function that attaches event listener to all buttons
parent.addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON') {
      displayValue(event.target.innerText);
    };
});

clear.addEventListener('click', () => {                   /////////////////

})