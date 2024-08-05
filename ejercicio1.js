
window.onload = calcular;

function calcular() {
    let botonCalculo = document.getElementById("botonCalculo");
    botonCalculo.addEventListener("click", clickbotonCalculo);
}

function clickbotonCalculo() {
    let textPeso = document.getElementById("textPeso");
    let peso = textPeso.value;
    
    let textAltura = document.getElementById("textAltura");
    let altura = textAltura.value;

    let calculoImc = peso / (altura * altura);
    document.getElementById('resultado').value = calculoImc.toFixed(2);
   
}

