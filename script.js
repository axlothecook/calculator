let display = document.getElementById('screen');
let parent = document.querySelector('.btn-container');
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
        return num1 % num2;
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
    
    if(value === 'Delete'){
        display.textContent = display.textContent.slice(0, -1);
        if(operator === undefined || operator === ''){number1 = number1.slice(0, -1);}
        else if(operator !== undefined && operator !== ''){number2 = number2.slice(0, -1);}
        else{operator = operator.slice(0, -1);}

    } else if(value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57){
        display.textContent += `${value}`;
        if(operator === undefined || operator === ''){
            number1 += value;
            console.log('number1: ' + number1);
        } else{
            number2 += value;
            console.log('number2: ' + number2);
        }

    } else if((value.charCodeAt(0) === 37) || (value.charCodeAt(0) >= 42 && value.charCodeAt(0) <= 45) || (value.charCodeAt(0) === 47)){
        display.textContent += `${value}`;
        operator = value;
        console.log('operator: ' + operator);

    } else if(value.charCodeAt(0) === 61){
        display.textContent = operate(number1.includes('.') ? parseFloat(number1)  : parseInt(number1), number2.includes('.') ? parseFloat(number2)  : parseInt(number2), operator);
        operator = '';
        number1 = display.textContent;
        console.log('num1: ' + number1);
        if(number2){
            number2 = '';
        }
        console.log('num2: ' + number2);
    } 
    else if(value === 'C'){
        display.textContent = '';
        number1 = '';
        number2 = '';
        operator = '';
    } 
    else if(value === '.'){
        if((operator === undefined || operator === '') && !(number1.includes('.'))){
            display.textContent += '.';
            number1 += '.';
            console.log('num1.1: ' + number1);
            // number1 = Number.parseFloat(number1);
        }
        else if((operator !== undefined && operator !== '') && !(number2.includes('.'))){
            display.textContent += '.';
            number2 += '.';
            // number2 = Number.parseFloat(number2);
        }   
    }
};


// function that attaches event listener to all buttons
parent.addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON') {
      displayValue(event.target.innerText);
    };
});
