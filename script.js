const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".special");
let display = document.querySelector(".display");
let displayValue;
let storeValue;
let operSign;
//adds displayShow function to each number button
numButtons.forEach((button) =>{
    button.addEventListener('click', () => displayShow(button.textContent));
});
//assigns doOperation function to each operator button
operatorButtons.forEach((button) =>{
    button.addEventListener('click', () => doOperation(button.textContent));
});
//stores previous displayValue to storeValue, assigns operator to operSign, if operator === "=" calls equal function
function doOperation(operator){
    if(operator==="=") equal(operSign,storeValue,displayValue);
    else{
    storeValue=displayValue;
    operSign=operator;
    display.textContent=operator;
    }
}
//takes operator and two values, returns calculated value
function equal(sign,a,b){
    let z=Math.floor(a);
    let x=Math.floor(b);
    console.log(z);
    console.log(x);
    if(sign==="+"){
    display.textContent=(z+x);
    }
    else if(sign==="-"){
        display.textContent=(z-x);
    }
    else if(sign==="*"){
        display.textContent=(z*x);
    }
    else if(sign==="/"){
        display.textContent=(z/x);
    }
}
//math operations
function operate(operator,a,b){
    if(operator==="+") console.log(addNum(a,b));
    else if(operator === "-") subtract(a,b);
    else if(operator === "*") multiply(a,b);
    else divide(a,b);

}
function addNum(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
//displays numbers when clicked on number buttons, also stores value in displayValue
function displayShow(smth){
    if(display.textContent==="+" || display.textContent==="-" || display.textContent==="*" || display.textContent==="/"){
        display.textContent="";
    }
    display.textContent+=smth;
    displayValue = display.textContent;
}
