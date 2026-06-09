function calcularAyuno() {
    const ultimaComidaInput = document.getElementById('ultimaComida').value;
    const horasAyuno = parseInt(document.getElementById('horasAyuno').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!ultimaComidaInput) {
        resultadoDiv.style.color = "#dc3545";
        resultadoDiv.innerText = "Por favor, ingresá la fecha y hora.";
        return;
    }

    const fechaUltimaComida = new Date(ultimaComidaInput);
    fechaUltimaComida.setHours(fechaUltimaComida.getHours() + horasAyuno);

    const opciones = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    
    resultadoDiv.style.color = "#28a745";
    resultadoDiv.innerText = `Podés comer el:\n${fechaUltimaComida.toLocaleDateString('es-ES', opciones)}`;
}