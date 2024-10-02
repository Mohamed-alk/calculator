function add(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = firstNum + secondNum;
    document.getElementById("result").innerHTML = resul;
} 
function subtract(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = firstNum - secondNum;
    document.getElementById("result").innerHTML = resul;
}
function mutiply(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = firstNum * secondNum;
    document.getElementById("result").innerHTML = resul;
}
function Divided(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = firstNum / secondNum;
    document.getElementById("result").innerHTML = resul;
}
function power(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = Math.pow(firstNum,secondNum) ;
    document.getElementById("result").innerHTML = resul;
}
function squarroot(){
    let firstNum = parseFloat (document.getElementById("num1").value);
    let secondNum = parseFloat (document.getElementById("num2").value);
    let resul = Math.sqrt(firstNum) ;
    document.getElementById("result").innerHTML = resul;
}


