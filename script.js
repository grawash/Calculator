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