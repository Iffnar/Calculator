let operator;
let a;
let b;
let possOp;

const num = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear");


// digit-button functionality
num.forEach((num) => {
    num.addEventListener("click", () => display.textContent += num.textContent); 
    
});    

// operate function
function operate() {
    let operatorIndex = possOp.findIndex(element => (element === "+" || element ==="-"));
    console.log(operatorIndex, possOp)
    a = parseFloat(possOp.slice( 0, operatorIndex).join(""));
    b = parseFloat(possOp.slice(operatorIndex +1).join(""));
    operator = possOp[operatorIndex];
    console.log(a, b, operator)
    calculate(a,operator,b);
 }
 


// operator-button function
operators.forEach((operators) => {
    operators.addEventListener("click", () => {
        
        if (checkIfOperatorInputted()) {
            console.log("i work");
            operate(possOp);
            display.textContent += operators.textContent;
        } else {
            console.log("i work 2")
            display.textContent += operators.textContent;
            
        }    
    });
});

// clear-button
clear.addEventListener("click", () => display.textContent = "");

// check if an operator is already in the display
function checkIfOperatorInputted() {
    // get display-content and trim whitespace
    possOp = Array.from(display.textContent).filter(element => element.trim())
    if (possOp.includes("+") || possOp.includes("-") || possOp.includes("*") || possOp.includes("/")) {
        return true
    } else { 
        return false  
    }
    };





// operator-button functionality
// const buttAdd = document.querySelector("#buttAdd");
// buttAdd.addEventListener("click", () => {
//     if (displayText.textContent.includes("-") || displayText.textContent.includes ("*") || displayText.textContent.includes ("/") || displayText.textContent.includes ("+")) {
//         b = parseFloat(display);
//        (operate(a,operator,b));
//        document.querySelector(".currentOperation").textContent = displayText.textContent;
//        a = sum;
//        displayText.textContent = "+";
       
//     } else { 
//         a = parseFloat(display);
//         display = "";
//         displayText.textContent += "+";
//         console.log(a);
//         operator = "+";
//     };
// });
// 
 
// const buttEqual = document.querySelector("#buttEqual");
// buttEqual.addEventListener("click", () => {
//     document.querySelector(".currentOperation").textContent = displayText.textContent;
//     console.log(`a = ${a}`);
//     b = parseFloat(display);
//     console.log(`b = ${b}`);
//     operate(a,operator,b);
// });    

// for calling math functions with number a, b and the chosen operator

function calculate(a, operator, b) {
    if (operator === "+") {
        add(a,b);
        return display.textContent = sum;
        
    } else if (operator === "-") {
        subtract(a,b);
        return display.textContent = difference;
    } else if (operator ==="*") {
        multiply(a,b);
        displayText.textContent = product;
        display = product;
    } else if (operator ==="/") {
        division(a,b);
        console.log(`quotient = ${quotient}`);
        if (quotient == "Infinity") {
            displayText.textContent = "You Dummy!";
            display = quotient;
        } else {
            displayText.textContent = quotient ;    
        }   
    } 
};

// functions for basic math operators; take number a and number b;
function add(a,b) {
    sum = a + b; 
    return sum.toFixed(10);   
}
function subtract(a,b) {
    difference = a - b;
    return difference.toFixed(10);
}
function multiply(a,b) {
    product = a * b;
    return product.toFixed(10);
}
function division(a,b) {
    quotient = a / b;
    return quotient.toFixed(10);
};


