if (window.self === window.top) {
  const anchos = { Tablet: 768, Celular: 390 };

  const barra = document.createElement("div");
  barra.className = "vp-barra";
  barra.setAttribute("role", "group");
  barra.setAttribute("aria-label", "Vista previa responsiva");

  const dialogo = document.createElement("dialog");
  dialogo.className = "vp";
  dialogo.setAttribute("aria-label", "Vista previa del sitio");

  const cabecera = document.createElement("div");
  cabecera.className = "vp-cabecera";

  const etiqueta = document.createElement("span");
  etiqueta.className = "vp-etiqueta";

  const marco = document.createElement("iframe");
  marco.className = "vp-marco";
  marco.title = "Vista previa del portafolio";

  const botonesDialogo = [];

  function elegir(nombre) {
    marco.style.width = anchos[nombre] + "px";
    etiqueta.textContent = `${nombre} · ${anchos[nombre]} px`;
    botonesDialogo.forEach((b) => b.setAttribute("aria-pressed", String(b.textContent === nombre)));
  }

  function abrir(nombre) {
    if (!dialogo.open) {
      marco.src = location.href.split("#")[0];
      dialogo.showModal();
    }
    elegir(nombre);
  }

  function crearBoton(texto, accion) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "vp-btn";
    boton.textContent = texto;
    boton.addEventListener("click", accion);
    return boton;
  }

  const rotulo = document.createElement("span");
  rotulo.textContent = "Vista previa:";
  barra.append(
    rotulo,
    crearBoton("Tablet", () => abrir("Tablet")),
    crearBoton("Celular", () => abrir("Celular"))
  );

  Object.keys(anchos).forEach((nombre) => {
    const b = crearBoton(nombre, () => elegir(nombre));
    b.setAttribute("aria-pressed", "false");
    botonesDialogo.push(b);
    cabecera.appendChild(b);
  });

  const cerrar = crearBoton("Cerrar", () => dialogo.close());
  cabecera.append(cerrar, etiqueta);

  dialogo.append(cabecera, marco);
  dialogo.addEventListener("close", () => { marco.src = "about:blank"; });

  document.body.append(barra, dialogo);
}
