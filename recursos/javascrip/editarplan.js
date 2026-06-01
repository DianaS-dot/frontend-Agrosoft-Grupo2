// Base de datos de simulación local
const datosPlanes = {
  "1": { titulo: "Control de malezas", frecuencia: "Cada 15 días", desc: "Aplicación de herbicida selectivo y control manual en áreas críticas.", color: "verde" },
  "2": { titulo: "Fertilización", frecuencia: "Cada 30 días", desc: "NPK 10-20-10, aplicación de 150 kg/ha.", color: "azul" },
  "3": { titulo: "Monitoreo de plagas", frecuencia: "Semanal", desc: "Inspección visual y uso de trampas adhesivas para detección temprana.", color: "morado" },
  "4": { titulo: "Riego", frecuencia: "Riego por aspersión", desc: "Monitoreo de humedad del suelo y ajuste según condiciones climáticas.", color: "amarillo" }
};

// Leer el parámetro id de la URL (?id=X)
const parametrosURL = new URLSearchParams(window.location.search);
const idPlan = parametrosURL.get('id');

const inputTitulo = document.getElementById("input-titulo");
const inputFrecuencia = document.getElementById("input-frecuencia");
const inputDescripcion = document.getElementById("input-descripcion");
const circulosColor = document.querySelectorAll(".circulo-color");

// Auto-completar los datos del formulario al cargar la página
if (idPlan && datosPlanes[idPlan]) {
  const info = datosPlanes[idPlan];
  inputTitulo.value = info.titulo;
  inputFrecuencia.value = info.frecuencia;
  inputDescripcion.value = info.desc;
  
  // Resalta el círculo de color correcto
  circulosColor.forEach(c => c.classList.remove("seleccionado"));
  const circuloCorrecto = document.querySelector(`.circulo-color[data-color="${info.color}"]`);
  if (circuloCorrecto) circuloCorrecto.classList.add("seleccionado");
}

// Lógica para cambiar manualmente la selección de color del formulario
circulosColor.forEach(c => {
  c.addEventListener("click", () => {
    circulosColor.forEach(x => x.classList.remove("seleccionado"));
    c.classList.add("seleccionado");
  });
});

// Al presionar el botón "Actualizar"
document.getElementById("formulario-editar").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Cambios guardados exitosamente!");
  window.location.href = "planesmanejo.html"; // Regresa al archivo hermano
});

// Al presionar el botón "Cancelar"
document.getElementById("btn-cancelar").addEventListener("click", function() {
  window.location.href = "../paginas/planesmanejo.html"; // Regresa al archivo hermano sin guardar
});