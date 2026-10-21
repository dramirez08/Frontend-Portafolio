const MAX_SLOTS = 3;

const formulario = document.getElementById("formulario");
const tipo = document.getElementById("tipo");
const detalles = document.getElementById("detalles");
const total = document.getElementById("total");
const slots = document.getElementById("slots");
const estado = document.getElementById("estado-slots");
const mensaje = document.getElementById("mensaje");

function calcularPrecio() {
  const suma = Number(tipo.value) + Number(detalles.value);
  const texto = "$" + suma.toLocaleString("es-CL");
  total.textContent = texto;
  return texto;
}

function actualizarEstado() {
  estado.textContent = `Slots usados: ${slots.children.length} de ${MAX_SLOTS}`;
}

tipo.addEventListener("change", calcularPrecio);
detalles.addEventListener("change", calcularPrecio);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (slots.children.length >= MAX_SLOTS) {
    mensaje.textContent = "No hay más slots disponibles :(";
    return;
  }
  mensaje.textContent = "";

  const usuario = formulario.usuario.value.trim();
  const item = document.createElement("li");
  item.className = "slot";

  const texto = document.createElement("span");
  texto.textContent = `Comisión de @${usuario} — ${calcularPrecio()}`;

  const eliminar = document.createElement("button");
  eliminar.type = "button";
  eliminar.className = "eliminar";
  eliminar.textContent = "Eliminar";
  eliminar.setAttribute("aria-label", `Eliminar comisión de @${usuario}`);

  item.append(texto, eliminar);
  slots.appendChild(item);
  actualizarEstado();

  formulario.reset();
  calcularPrecio();
});

slots.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    e.target.closest("li").remove();
    mensaje.textContent = "";
    actualizarEstado();
  }
});

calcularPrecio();
