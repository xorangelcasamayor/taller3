let notas = [
    {
        id: 1,
        titulo: 'Taller',
        texto: 'entregar el lunes antes de las 8am',
        realizada: false
    }
];

let idGlobal = 1;


function pintarNotas() {
    let contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.innerHTML = '';

    const filtroTexto = document.getElementById('filtroTexto').value.toLowerCase();
    const filtroRealizadas = document.getElementById('filtroRealizadas').checked;

    let notasFiltradas = notas
        .filter(nota => !filtroRealizadas || nota.realizada)
        .filter(nota => nota.titulo.toLowerCase().includes(filtroTexto) || nota.texto.toLowerCase().includes(filtroTexto));

    if (notasFiltradas.length === 0) {
        contenedorNotas.innerHTML = '<p>No hay notas para mostrar</p>';
        return;
    }

    notasFiltradas.forEach(nota => {
        let tarjetaNota = document.createElement('div');
        tarjetaNota.className = 'nota';
        tarjetaNota.innerHTML = `
            <h2>${nota.titulo}</h2>
            <p>${nota.texto}</p>
            <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? 'checked' : ''}>
            <button onClick="borrarNota(${nota.id})">Borrar Nota</button>
        `;
        contenedorNotas.appendChild(tarjetaNota);
    });
}


function agregarNota(titulo, texto) {
    let nuevaNota = {
        id: idGlobal++,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);
    pintarNotas();
}


function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}


function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
}


function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
}


function aplicarFiltros() {
    pintarNotas();
}


document.getElementById('guardarBtn').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value.trim();
    const texto = document.getElementById('texto').value.trim();
    if (titulo && texto) {
        agregarNota(titulo, texto);
        limpiarCampos();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

document.getElementById('limpiarBtn').addEventListener('click', limpiarCampos);


pintarNotas();
