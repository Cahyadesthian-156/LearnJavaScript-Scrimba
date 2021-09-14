let num1 = 2;
let num2 = 6;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//create four function thta correspondeance with button from this
//perform operation of num1 and num2
//render the value at res-el

//let result;
let resEl = document.getElementById("result-el");

function add() {
    let result = num1 + num2;
    // console.log(result);
    resEl.textContent =  "Sum: " + result;
}

function subtract() {
    let result = num1-num2;
    resEl.textContent = "Sub: " + result;

}

function divide() {
    let result = num1/num2;
    resEl.textContent = "Div: " + result;
}


function multiply() {
    let result = num1*num2;
    resEl.textContent = "Mult: " + result;
}



