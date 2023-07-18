let operator;
let a;
let b;


const num = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear");


// digit-button functionality
num.forEach((num) => {
    num.addEventListener("click", () => display.textContent += num.textContent); 
    
});    
// operator-button function
operators.forEach((operators) => {
    operators.addEventListener("click", () => {
        
        if (checkIfOperatorInputted()) {
            console.log("i work")
            operate();
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
    console.log(display.textContent)
    let possOp = Array.from(display.textContent);
    if (possOp.includes("+") || possOp.includes("-") || possOp.includes("*") || possOp.includes("/")) {
        return true
    } else { 
        return false  
    }
    };

//     // operate function
//  function operate() {
//     a = display.textContent.
//  }   



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

function operate(a, operator, b) {
    if (operator === "+") {
        add(a,b);
        displayText.textContent = sum;
        display = sum;
        console.log(`${display} = a`);
    } else if (operator === "-") {
        subtract(a,b);
        displayText.textContent = difference;
        display = difference;
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


