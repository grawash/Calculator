const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".special");
let display = document.querySelector(".current");
let prevDisplay =document.querySelector(".previous");
const clear = document.querySelector(".clear");
const undo = document.querySelector(".undo");
const decimal = document.querySelector(".dot");
let displayValue;
let storeValue;
let operSign;
let prevOper=0;
//adds displayShow function to each number button
numButtons.forEach((button) =>{
    button.addEventListener('click', () => displayShow(button.textContent));
});
function displayShow(value){
    if(display.textContent == "+"||display.textContent == "-"||display.textContent == "*"||display.textContent == "/"){display.textContent=""}
    display.textContent+=value;
    displayValue=display.textContent;
}

//assigns displayOperation function to each operator button
operatorButtons.forEach((button) =>{
    button.addEventListener('click', () => displayOperation(button.textContent));
});
//checks if clicked button === "=" displays calculated value in current display
//also checks if operations are chained and displays calculated value in current display (if another operation is called calculated value is put in prev. display)
function displayOperation(button){
    display.textContent=button;
    if(button === "="){display.textContent=calculate(prevOper); return;}
    if(prevOper){displayValue=calculate(prevOper); prevDisplay.textContent=displayValue;} //display.textContent=displayValue};
    prevOper=button;
    storeValue=displayValue;
}
//mathematical calculation
function calculate(prevOper){
    if (prevOper==="+") return (parseFloat(storeValue)+parseFloat(displayValue))
    else if (prevOper==="-") return (parseFloat(storeValue)-parseFloat(displayValue))
    else if (prevOper==="*") return (parseFloat(storeValue)*parseFloat(displayValue))
    else if (parseFloat(storeValue)/parseFloat(displayValue) === Infinity) return "¯\_(ツ)_/¯";
    else return (parseFloat(storeValue)/parseFloat(displayValue))

}
clear.addEventListener('click',() => {displayValue=0;storeValue=0;operSign=false;display.textContent="";prevDisplay.textContent="";})
undo.addEventListener('click',() => { display.textContent=displayValue.slice(0, -1); displayValue=displayValue.slice(0, -1)})
 decimal.addEventListener('click',addDot);

function addDot(){ 
     if (display.textContent.indexOf('.') !== -1){return} 
     else if(display.textContent===""){display.textContent+="0."; displayValue+=".";}
     else {display.textContent+=".";displayValue+=".";}
 };
window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            displayShow(x)
            break;
        case '2':
            displayShow(x)
            break;
        case '3':
            displayShow(x)
            break;
        case'4':
            displayShow(x)
            break;
        case '5':
            displayShow(x)
            break;
        case '6':
            displayShow(x)
            break;
        case '7':
            displayShow(x)
            break;
        case '8':
            displayShow(x)
            break;
        case '9':
            displayShow(x)
            break;
        case '0':
            displayShow(x)
            break;
        case 'Escape':
            displayValue=0;storeValue=0;operSign=false;display.textContent="";prevDisplay.textContent="";
            break;
        case 'Backspace':
            display.textContent=displayValue.slice(0, -1); displayValue=displayValue.slice(0, -1);
            break;
        case '*':
            displayOperation(x)
            break;
        case '/':
            displayOperation(x)
            break;
        case '-':
            displayOperation(x)
            break;
        case '+':
            displayOperation(x)
            break;
        case '.':
            addDot();
            break;
        case 'Enter':
            displayOperation("=")
            break;

    }
}