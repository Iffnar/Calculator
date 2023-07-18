
let a
let b
let operator;
const num = document.querySelectorAll("#num");
const display = document.querySelector(".display");

// function to populate display


// digit-button functionality

num.forEach((num) => {
    num.addEventListener("click", () => display.textContent += num.textContent); 
});    



// const butt2 = document.querySelector("#butt2");
// butt2.addEventListener("click", () => {
//     displayText.textContent += 2;
//     display += 2;
// });   
// const butt3 = document.querySelector("#butt3");
// butt3.addEventListener("click", () => {
//     displayText.textContent += 3;
//     display += 3;
// });
// const butt4 = document.querySelector("#butt4");
// butt4.addEventListener("click", () => {
//     displayText.textContent += 4;
//     display += 4;
// });
// const butt5 = document.querySelector("#butt5");
// butt5.addEventListener("click", () => {
//     displayText.textContent += 5;
//     display += 5;
// });
// const butt6 = document.querySelector("#butt6");
// butt6.addEventListener("click", () => {
//     displayText.textContent += 6;
//     display += 6;
// });
// const butt7 = document.querySelector("#butt7");
// butt7.addEventListener("click", () => {
//     displayText.textContent += 7;
//     display += 7;
// });
// const butt8 = document.querySelector("#butt8");
// butt8.addEventListener("click", () => {
//     displayText.textContent += 8;
//     display += 8;
// });
// const butt9 = document.querySelector("#butt9");
// butt9.addEventListener("click", () => {
//     displayText.textContent += 9;
//     display += 9;
// });
// const butt0 = document.querySelector("#butt0");
// butt0.addEventListener("click", () => {
//     displayText.textContent += 0;
//     display += 0;
// });
const buttDot = document.querySelector("#buttDot");
buttDot.addEventListener("click", () => {
    displayText.textContent.includes(".") ? buttDot.disable = true :
    displayText.textContent += ".";
    display += ".";
});

// operator-button functionality
const buttAdd = document.querySelector("#buttAdd");
buttAdd.addEventListener("click", () => {
    if (displayText.textContent.includes("-") || displayText.textContent.includes ("*") || displayText.textContent.includes ("/") || displayText.textContent.includes ("+")) {
        b = parseFloat(display);
       (operate(a,operator,b));
       document.querySelector(".currentOperation").textContent = displayText.textContent;
       a = sum;
       displayText.textContent = "+";
       
    } else { 
        a = parseFloat(display);
        display = "";
        displayText.textContent += "+";
        console.log(a);
        operator = "+";
    };
});
const buttSub = document.querySelector("#buttSub");
buttSub.addEventListener("click", () => {
    if (displayText.textContent.includes("-") || displayText.textContent.includes ("*") || displayText.textContent.includes ("/") || displayText.textContent.includes ("+")) {
        b = parseFloat(display);
        (operate(a,operator,b));
        document.querySelector(".currentOperation").textContent = displayText.textContent;
        a = difference;
        displayText.textContent += "-";
    } else {   
        a = parseFloat(display); 
        display = "";
        console.log(a);
        displayText.textContent += "-";
        operator = "-";
}});
const buttMult = document.querySelector("#buttMult");
buttMult.addEventListener("click", () => {
    a = parseFloat(display); 
    display = "";
    console.log(a);
    displayText.textContent += "*";
    operator = "*";
});
const buttDiv = document.querySelector("#buttDiv");
buttDiv.addEventListener("click", () => {
    a = parseFloat(display); 
    display = "";
    console.log(a);
    displayText.textContent += "/";
    operator = "/";
});
const buttClear = document.querySelector("#buttClear");
buttClear.addEventListener("click", () => {
    displayText.textContent = "";
    document.querySelector(".currentOperation").textContent = "";
    display = "";
});    
const buttEqual = document.querySelector("#buttEqual");
buttEqual.addEventListener("click", () => {
    document.querySelector(".currentOperation").textContent = displayText.textContent;
    console.log(`a = ${a}`);
    b = parseFloat(display);
    console.log(`b = ${b}`);
    operate(a,operator,b);
});    

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


