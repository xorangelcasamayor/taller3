const precioDolar = 4000;

const dolaresInput = document.getElementById('dolares');
const pesosInput = document.getElementById('pesos');


function dolarPeso() {
    const dolares = parseFloat(dolaresInput.value) || 0;
    const pesos = dolares * precioDolar;
    pesosInput.value = pesos.toFixed(2);
}

function pesoDolar() {
    const pesos = parseFloat(pesosInput.value) || 0;
    const dolares = pesos / precioDolar;
    dolaresInput.value = dolares.toFixed(2);
}
dolaresInput.addEventListener('input', dolarPeso);
pesosInput.addEventListener('input', pesoDolar);