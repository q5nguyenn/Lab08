let value1, value2;
value1 = 1;
value2 = 2;
function sum(){
     let value1 = Number(document.getElementById('value1').value);
     let value2 = Number(document.getElementById('value2').value);
     let sumValue = value1 + value2;
     document.getElementById('test').textContent =  sumValue;
}
// document.getElementById('test').textContent = tinhtong (value1, value2)