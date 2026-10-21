const hero = document.querySelector(".hero");
const pausa = document.querySelector(".hero-pausa");
const detalles = document.querySelector("#testimonios details");

pausa.addEventListener("click", () => {
  const enPausa = hero.classList.toggle("en-pausa");
  pausa.setAttribute("aria-pressed", String(enPausa));
  pausa.textContent = enPausa ? "▶ Reanudar fondo" : "⏸ Pausar fondo";
});

function abrirTestimonios() {
  if (location.hash === "#testimonios") detalles.open = true;
}

window.addEventListener("hashchange", abrirTestimonios);
abrirTestimonios();
