let display_val = 0;
const number_buttons = document.querySelectorAll("#number");
const del_button = document.querySelector("#del-button");
const back = document.querySelector("#backspace")
const operators = document.querySelectorAll("#bi_op");
const equal = document.querySelector("#eq");

const screen_num = document.querySelector(".screen-num");

let num_one = 0;
let op = "";
let num_two = 0;

number_buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        screen_num.textContent += button.textContent;
    });
});

del_button.addEventListener("click", ()=>{
    screen_num.textContent = "";
    clearCache();
});

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        num_one = screen_num.textContent;
        op = operator.textContent;
        screen_num.textContent = "";
    });
});

equal.addEventListener("click", ()=>{
    num_two = screen_num.textContent;
    num_one = operate(opType(op), parseInt(num_one), parseInt(num_two));
    num_two = 0;
    screen_num.textContent = num_one;
    
});

function opType(given_op){
    switch(given_op){
        case "+":
            return add;
            break;
        case "-":
            return subs;
            break;
        case "/":
            return divide;
            break;
        case "x":
            return multiply;
            break;
        case "%":
            return remainder;
            break;
        case "x**2":
            return square;
            break;
        case "x**(0.5)":
            return square_root;
            break;
        case "a**b":
            return exponent;
            break;
        case "!":
            return factorial;
            break;
    }
         
}


// Functions for caluclator buttons 

function add(a, b){
    return a + b;
}
function subs(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b;
}
function square_root(a){
    return a**0.5;
}
function square(a){
    return a**2;
}
function factorial(a){
    let ans = 1;
    for(let i = 1; i<a; i++){
        ans *= i;
    }return ans;
}
function remainder(a,b){
    return a % b;
}
function exponent(a,b){
    return a**b;
}

function operate(func, a, b){
    return func(a,b);
}

// Button functionalities

function clearCache(){
    num_one = 0;
    op = "";
    num_two = 0;
}