const FirstNumber = document.getElementById('first_number');
const SecondNumber = document.getElementById('second_number');
const Result = document.getElementById('result');
const Sum = document.getElementById('sum');
const Sub = document.getElementById('sub');
const Mul = document.getElementById('mul');
const Div = document.getElementById('div');
function sum(){
    Result.value = parseInt(FirstNumber.value) + parseInt(SecondNumber.value);
    document.getElementById('result').innerHTML = Result.value;
}
function sub(){
    Result.value = parseInt(FirstNumber.value) - parseInt(SecondNumber.value);
    document.getElementById('result').innerHTML = Result.value;
}
function mul(){
    Result.value = parseInt(FirstNumber.value) * parseInt(SecondNumber.value);
    document.getElementById('result').innerHTML = Result.value;
}
function div(){
    Result.value = parseInt(FirstNumber.value) / parseInt(SecondNumber.value);
    document.getElementById('result').innerHTML = Result.value;
}