
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

// operator-button functionality
const buttAdd = document.querySelector("#buttAdd");
buttAdd.addEventListener("click", () => {
    a = parseInt(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "+";
    operator = "+";
});
const buttSub = document.querySelector("#buttSub");
buttSub.addEventListener("click", () => {
    a = parseInt(displayValue);
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "-";
    operator = "-";
})
const buttMult = document.querySelector("#buttMult");
buttMult.addEventListener("click", () => {
    a = parseInt(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "*";
    operator = "*";
});
const buttDiv = document.querySelector("#buttDiv");
buttDiv.addEventListener("click", () => {
    a = parseInt(displayValue); 
    displayValue = "";
    console.log(a);
    document.querySelector(".displayValue").textContent += "/";
    operator = "/";
});
const buttClear = document.querySelector("#buttClear");
buttClear.addEventListener("click", () => {
    document.querySelector(".displayValue").textContent = "";
    displayValue = "";
});    
const buttEqual = document.querySelector("#buttEqual");
buttEqual.addEventListener("click", () => {
    console.log(`a = ${a}`);
    b = parseInt(displayValue);
    console.log(`b = ${b}`);
    operate(a,operator,b);
});    


// for calling math functions with number a, b and the chosen operator
function operate(a, operator, b) {
    if (operator === "+") {
        console.log("sum")
        add(a,b);
        document.querySelector(".displayValue").textContent = sum;
    } else if (operator === "-") {
        console.log("difference")
        subtract(a,b);
        document.querySelector(".displayValue").textContent = difference;
    } else if (operator ==="*") {
        multiply(a,b);
        document.querySelector(".displayValue").textContent = product;
    } else if (operator ==="/") {
        division(a,b);
        document.querySelector(".displayValue").textContent = quotient;
    } 
};



// functions for basic math operators; take number a and number b;
function add(a,b) {
    return sum = a + b;    
}
function subtract(a,b) {
    return difference = a - b;
}
function multiply(a,b) {
    return product = a * b;
}
function division(a,b) {
    return quotient = a / b;
}


