//check if object is empty or not
// let schedule = {};

// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// };

// console.log(isEmpty(schedule));

//calculator
// function adding(num, num2){return parseInt(num) + parseInt(num2);}
// function substraction(num, num2){return parseInt(num) - parseInt(num2);}
// function multiply(num, num2){return parseInt(num) * parseInt(num2);}
// function division(num, num2){return parseInt(num) / parseInt(num2);}

// let number, operator, number2;

// const numObject = {
//     '+': adding(number, number2), 
//     '-': substraction(number, number2), 
//     '*': multiply(number, number2),
//     '/': division(number, number2)
// }

// do{
//     while(number != '=' || operator != '=' || number2 != '='){
//     number = window.prompt("Enter a number: ");
//     operator = window.prompt("Enter an operator: ");
//     number2 = window.prompt("Enter a number: ");
//     operator = window.prompt("Enter an operator: ");
//     }
//     console.log(numObject[operator]);
// }while(number != 0);



//first functions: add | substract | multiply | divide

let addition = function(num1, num2){
    return num1 + num2;
};

let multiply = function(num1, num2){
    return num1 * num2;
};

let substraction = function(num1, num2){
    return num1 - num2;
};

let division = function(num1, num2){
    return num1 / num2;
};