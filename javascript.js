let operator;
let a;
let b;
let possOp;

const num = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot")

let digitAlreadyAdded = false;

// keyboard-support ==> !!not finished!!
document.addEventListener("keydown", (event) => {
    num.forEach((num) => {
        console.log("first")
       if (event.key === num.textContent) {
       addDigitToDisplay(event.key);
       }
    })
});

// add digit to display
function addDigitToDisplay(digit) {
    display.textContent += digit;
}

// digit-button functionality
num.forEach((num) => {
    num.addEventListener("click", () => {
        display.textContent += num.textContent;
    });
});    
  

// operate function
function operate() {
    let operatorIndex = possOp.findIndex(element => (element === "+" || element ==="-") || element ==="*" || element ==="/");
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
            // enable the dot-Button again because it may be disabled form the user tying to input multiple dots before
            dot.disabled = false;
        }    
    });
});

// clear-button
clear.addEventListener("click", () => display.textContent = "");

//equal-button
equal.addEventListener("click", () => {
    possOp = Array.from(display.textContent).filter(element => element.trim());
    operate(possOp)
});
// // dot-button 
dot.addEventListener("click", () => {

    if(isDotAlreadyPresent(display.textContent)) {
       
        dot.disabled = true;
        console.log("disabled")
    } else {
        dot.disabled = false;
        console.log("active")
        display.textContent += "."
    }});
    
// function to check if there already is a dot in the display
function isDotAlreadyPresent() {
    let operatorFound = false;
    let dotAlreadyThere = false
    possOp = Array.from(display.textContent).filter(element => element.trim());        
    console.log(possOp.length)

        for (let i = possOp.length -1; i >= 0; i--) {
            const char = possOp[i];
            console.log(`${i} = i`)
            console.log(`${char} = character`)
            
            if (char === "+" || char === "-" || char === "*" || char === "/") {
                console.log("break")
                operatorFound = true;
                break;
                
            } else  if (char === ".") {
                console.log("dotAlreadyThere")
                dotAlreadyThere = true;
            }};
            console.log(operatorFound)
            console.log(dotAlreadyThere)
       return operatorFound ? false : dotAlreadyThere;
    };


// check if an operator is already in the display
function checkIfOperatorInputted() {
    // get display-content and trim whitespace
    possOp = Array.from(display.textContent).filter(element => element.trim())
    if (possOp.includes("+") || possOp.includes("-") || possOp.includes("*") || possOp.includes("/")) {
        return true
    } else { 
        return false  
    }};
   

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
        return display.textContent = product;
    } else if (operator ==="/") {
        division(a,b);
        if (quotient == "Infinity") {
            display.textContent = "You Dummy!";
        } else {
            return display.textContent = quotient;    
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


