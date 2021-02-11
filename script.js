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

function operator(func, a, b){
    return func(a, b);
}