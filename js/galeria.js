const botones = document.querySelectorAll(".galeria button");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");

const lista = Array.from(botones).map((boton) => {
  const img = boton.querySelector("img");
  return { src: img.src, desc: img.alt };
});

let actual = 0;

function mostrar() {
  modalImg.src = lista[actual].src;
  modalImg.alt = lista[actual].desc;
  modalDesc.textContent = lista[actual].desc;
}

function mover(paso) {
  actual = (actual + paso + lista.length) % lista.length;
  mostrar();
}

botones.forEach((boton, i) => {
  boton.addEventListener("click", () => {
    actual = i;
    mostrar();
    modal.showModal();
  });
});

modal.querySelector(".prev").addEventListener("click", () => mover(-1));
modal.querySelector(".next").addEventListener("click", () => mover(1));
modal.querySelector(".modal-cerrar").addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

modal.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") mover(-1);
  if (e.key === "ArrowRight") mover(1);
});
