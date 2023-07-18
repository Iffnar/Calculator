
let a
let b
let operator = "+";
let sum;
let difference;
let product;
let quotient;
let displayValue = "";

// let displayValue = displayText




// digit-button functionality
const butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", () => {
   displayValue += 1;
   document.querySelector(".displayValue").textContent +=1;
   console.log(displayValue); 
});    
const butt2 = document.querySelector("#butt2");
butt2.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 2;
    displayValue += 2;
});   
const butt3 = document.querySelector("#butt3");
butt3.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 3;
    displayValue += 3;
});
const butt4 = document.querySelector("#butt4");
butt4.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 4;
    displayValue += 4;
});
const butt5 = document.querySelector("#butt5");
butt5.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 5;
    displayValue += 5;
});
const butt6 = document.querySelector("#butt6");
butt6.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 6;
    displayValue += 6;
});
const butt7 = document.querySelector("#butt7");
butt7.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 7;
    displayValue += 7;
});
const butt8 = document.querySelector("#butt8");
butt8.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 8;
    displayValue += 8;
});
const butt9 = document.querySelector("#butt9");
butt9.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 9;
    displayValue += 9;
});
const butt0 = document.querySelector("#butt0");
butt0.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += 0;
    displayValue += 0;
});
const buttDot = document.querySelector("#buttDot");
buttDot.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent += ".";
    displayValue += ".";
});

// operator-button functionality
const buttAdd = document.querySelector("#buttAdd");
buttAdd.addEventListener("click", () => {
    a = parseFloat(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "+";
    operator = "+";
});
const buttSub = document.querySelector("#buttSub");
buttSub.addEventListener("click", () => {
    a = parseFloat(displayValue);
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "-";
    operator = "-";
})
const buttMult = document.querySelector("#buttMult");
buttMult.addEventListener("click", () => {
    a = parseFloat(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "*";
    operator = "*";
});
const buttDiv = document.querySelector("#buttDiv");
buttDiv.addEventListener("click", () => {
    a = parseFloat(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "/";
    operator = "/";
});
const buttClear = document.querySelector("#buttClear");
buttClear.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent = "";
    document.querySelector(".currentOperation").textContent = "";
    displayValue = "";
});    
const buttEqual = document.querySelector("#buttEqual");
buttEqual.addEventListener("click", () => {
    document.querySelector(".currentOperation").textContent = document.querySelector(".displayValue").textContent;
    console.log(`a = ${a}`);
    b = parseFloat(displayValue);
    console.log(`b = ${b}`);
    operate(a,operator,b);
});    


// for calling math functions with number a, b and the chosen operator
function operate(a, operator, b) {
    if (operator === "+") {
        add(a,b);
        document.querySelector(".displayValue").textContent = sum;
        displayValue = sum;
        console.log(`${displayValue} = a`);
    } else if (operator === "-") {
        console.log("difference")
        subtract(a,b);
        document.querySelector(".displayValue").textContent = difference;
        displayValue = difference;
    } else if (operator ==="*") {
        multiply(a,b);
        document.querySelector(".displayValue").textContent = product;
        displayValue = product;
    } else if (operator ==="/") {
        division(a,b);
        console.log(`quotient = ${quotient}`);
        if (quotient == "Infinity") {
            document.querySelector(".displayValue").textContent = "You Dummy!";
            displayValue = quotient;
        } else {
            document.querySelector(".displayValue").textContent = quotient ;    
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


