const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".special");
let display = document.querySelector(".current");
let prevDisplay =document.querySelector(".previous");
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
    if (prevOper==="+") return (Math.floor(storeValue)+Math.floor(displayValue))
    else if (prevOper==="-") return (Math.floor(storeValue)-Math.floor(displayValue))
    else if (prevOper==="*") return (Math.floor(storeValue)*Math.floor(displayValue))
    else if (Math.floor(storeValue)/Math.floor(displayValue) === Infinity) return "¯\_(ツ)_/¯";
    else return (Math.floor(storeValue)/Math.floor(displayValue))

}
