// ── Modal ──
function abrirModal() {
    document.getElementById('modal-actividad').hidden = false;
}

function cerrarModal() {
    document.getElementById('modal-actividad').hidden = true;
    document.getElementById('formulario-actividad').reset();
}

// Cerrar al hacer clic fuera del modal
document.getElementById('modal-actividad').addEventListener('click', function (e) {
    if (e.target === this) cerrarModal();
});

// ── Agregar actividad ──
function agregarActividad(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo-actividad').value;
    const fecha  = document.getElementById('fecha-actividad').value;
    const hora   = document.getElementById('hora-actividad').value;
    const tipo   = document.getElementById('tipo-actividad').value;

    const fechaFormateada = new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES');

    const lista = document.querySelector('.lista-actividades');
    const actividad = document.createElement('div');
    actividad.className = 'actividad';
    actividad.innerHTML = `
        <button class="btn-completar" aria-label="Marcar como completada"></button>
        <div class="info-actividad">
            <h3>${titulo}</h3>
            <div class="meta-actividad">
                <span>${fechaFormateada}</span><span>•</span><span>${hora}</span>
            </div>
            <span class="etiqueta etiqueta-${tipo}">${tipo}</span>
        </div>
    `;

    // Evento para marcar como completada
    actividad.querySelector('.btn-completar').addEventListener('click', function () {
        actividad.classList.toggle('completada');
        this.style.background = actividad.classList.contains('completada') ? '#16a34a' : 'white';
    });

    lista.appendChild(actividad);
    cerrarModal();
}

// ── Marcar actividades existentes ──
document.querySelectorAll('.btn-completar').forEach(btn => {
    btn.addEventListener('click', function () {
        const actividad = this.closest('.actividad');
        actividad.classList.toggle('completada');
        this.style.background = actividad.classList.contains('completada') ? '#16a34a' : 'white';
    });
});
