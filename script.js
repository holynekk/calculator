const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear-screen");
const dot = document.querySelector("#dot");
const del = document.querySelector("#backspace");
const unary = document.querySelector("#plus-minus");
const equal = document.querySelector("#equal");
const display = document.querySelector("#screen");

function shakeScreen(){
    display.animate([
        // keyframes
        { transform: 'translateY(5px)' },
        { transform: 'translateY(-5px)' }
    ], {
        // timing options
        duration: 1,
        iterations: 500
    });
}

function findOperator(str){
    let opSet = "+-X/%";
    for(let i = 0; i < 5; i++){
        if(opSet[i] === str[str.length-1]){
            return true;
        }
    }
    return false;
}

function noOperator(str){
    let opSet = "+-X/%";
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < 5; j++){
            if(opSet[j] === str[i]){
                return false;
            }
        }
    }
    return true;
}

function calculate(str){
    let num1;
    let num2;
    let opr;
    let opSet = "+-X/%";
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < 5; j++){
            if(opSet[j] === str[i]){
                opr = opSet[j];
                num1 = str.substring(0,i);  
                num2 = str.substring(i+1, str.length);
                break;
            }
        }
    }
    switch(opr){
        case "+":
            return operate(add, parseInt(num1), parseInt(num2));
        case "-":
            return operate(subtract, parseInt(num1), parseInt(num2));
        case "/":
            return operate(divide, parseInt(num1), parseInt(num2));
        case "X":
            return operate(multiply, parseInt(num1), parseInt(num2));
        case "%":
            return operate(remainder, parseInt(num1), parseInt(num2));
    }
}
// Button functionalities

clear.addEventListener("click",()=>{
    display.textContent = 0;
});

del.addEventListener("click",()=>{
    if(display.textContent.length === 1){
        display.textContent = 0;
    }else{
        display.textContent = display.textContent.slice(0, -1);
    }
});

numbers.forEach(number=>{
    number.addEventListener("click", ()=>{
        if(display.textContent[0] == 0 && display.textContent.length === 1){
            display.textContent = number.textContent;
        }else{
            display.textContent += number.textContent;
        }
    });
});

function dotInside(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === "."){
            return true;
        }
    }return false;
}

dot.addEventListener("click", ()=>{
    if(dotInside(display.textContent)){
        shakeScreen();
    }else{
        display.textContent += dot.textContent;
    }
});

operators.forEach(op => {
    op.addEventListener("click", ()=>{
        if(findOperator(display.textContent)){
            shakeScreen();
        }else if(!noOperator(display.textContent)){
            display.textContent = calculate(display.textContent);
            display.textContent += op.textContent;
        }else{
            display.textContent += op.textContent;
        }
        
    });
});

equal.addEventListener("click", ()=>{
    if(findOperator(display.textContent)){
        shakeScreen();
    }else if(!noOperator(display.textContent)){
        // Calculate
        display.textContent = calculate(display.textContent);
    }// Else {Nothing will change.}
});

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function remainder(a, b){
    return a % b;
}

function operate(func, a, b){
    return func(a, b);
}