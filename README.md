# Portafolio de Danna | Artista Digital

Portafolio web individual hecho para **ICINF1107 – Desarrollo de Frontend** (Ingeniería Civil en Informática, UC Temuco). Muestra mis ilustraciones, los testimonios de clientes y una página para pedir comisiones.

## Descripción

El sitio tiene dos páginas:

- **`index.html`**: portada con hero, galería de dibujos, sobre mí, testimonios y contacto.
- **`comisiones.html`**: tabla de precios, calculadora de precio, formulario de solicitud y slots disponibles.

## Audiencia y propósito

El portafolio está pensado para **personas que quieren encargarme un dibujo** (clientes de comisiones). Lo que necesitan, en orden:

1. Ver mi arte y mi estilo.
2. Confiar en mí (quién soy y qué dicen otros clientes).
3. Saber cómo, cuánto y por dónde pedir.

## Tecnologías

- HTML5 semántico visto en clases de frontend
- CSS3 externo (variables, Grid, Flexbox, media queries, animaciones con `@keyframes`)
- JavaScript básico con IA, solo para detalles extra: visor de imágenes, calculadora de precio y vista previa responsiva. El sitio se entiende sin JS.
- Tipografía **Domine** (Google Fonts)

## Estructura de carpetas

```
portafolio/
├── index.html
├── comisiones.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── galeria.js
│   ├── comisiones.js
│   ├── interfaz.js
│   └── vista-previa.js
└── img/
    ├── 1.png ... 13.gif
    ├── icon.jpg
```

## Cómo abrirlo

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador. No necesita instalar nada.
3. Opcional: usar la extensión **Live Server** de VS Code, o GitHub Pages. Con eso funciona mejor la vista previa de tablet y celular.

## Decisiones de diseño

**Estructura y priorización del contenido (A3)**
Después del header voy directo con el hero, la galería, sobre mí, testimonios y contacto. El cliente quiere ver el arte primero, así que la galería está antes que la biografía.

**Header y hero**
El header es pequeño y queda fijo desde tablet para que el menú siempre esté a mano. El hero ocupa la pantalla inicial con mi nombre grande y un fondo de dibujos que cambian solos. Así lo primero que se ve es mi arte, que es lo que busca la audiencia.

**Jerarquía visual (B3)**
Un solo `h1` (mi nombre en el hero), un `h2` por sección y tamaños que bajan de forma coherente. Uso espaciado generoso, tarjetas con borde y un color de acento rosado solo para lo importante (botón de comisiones, foco de las imágenes, totales).

**Colores**
Paleta violeta oscura, porque combina con mi estilo (colores fríos intensos) y hace que los dibujos resalten. Los colores están como variables en `:root` (`--fondo`, `--tarjeta`, `--titulo`, `--acento`, etc.) para mantener coherencia y cambiarlos en un solo lugar.

**Responsividad (B2)**
Enfoque mobile-first con 3 puntos de quiebre:

| Punto de quiebre | Ancho | Qué cambia |
|------------------|-------|------------|
| Móvil | base (menos de 600px) | 1 columna de galería, header en columna, formulario apilado |
| Tablet | desde 600px | Galería en 2 columnas, header en fila y fijo, campos del formulario lado a lado |
| Escritorio | desde 900px | Galería en 3 columnas, más espacio en las secciones, hero más alto |

La tabla de precios hace scroll horizontal si no cabe en pantallas angostas.

**Testimonios desplegables**
Usan `<details>` y `<summary>` para que el cliente decida si los quiere leer. Es un componente nativo, con teclado y sin JS.

## Accesibilidad (D1)

| Consideración | Cómo la apliqué |
|---------------|-----------------|
| Estructura de encabezados | Un `h1`, `h2` por sección, sin saltar niveles |
| Landmarks | `header`, `nav`, `main`, `section`, `footer` |
| Texto alternativo | Cada dibujo de la galería tiene `alt` descriptivo. Las imágenes decorativas del hero llevan `alt=""` y `aria-hidden` |
| Etiquetas de formulario | Todos los campos tienen `<label for>` con su `id`. Los grupos usan `fieldset` y `legend` |
| Foco con teclado | Anillo amarillo con `:focus-visible` en enlaces, botones y campos. Skip link "Saltar al contenido" |
| Visor de imágenes | Usa `<dialog>`: se cierra con Esc, atrapa el foco y tiene botones con `aria-label` |
| Tabla | `caption` y `scope` en las celdas de encabezado |
| Movimiento | Botón para pausar el fondo del hero y respeto de `prefers-reduced-motion` |
| Mensajes dinámicos | El total, el estado de slots y los avisos usan `<output>`, `aria-live` y `role="alert"` |

**Contraste (WCAG AA, mínimo 4,5:1 para texto normal)**

| Combinación | Ratio |
|-------------|-------|
| Texto `#ece4f7` sobre tarjeta `#26104a` | 13,5:1 |
| Subtexto `#c9b8e0` sobre tarjeta `#26104a` | 9,1:1 |
| Títulos `#f3d9ff` sobre tarjeta `#26104a` | 12,9:1 |
| Enlaces `#d6b8ff` sobre tarjeta `#26104a` | 9,7:1 |
| Blanco sobre botón `#7c3aed` | 5,7:1 |
| Blanco sobre header `#6c33b1` (extremo más claro) | 7,6:1 |
| Botón Comisiones `#3b0f55` sobre `#fbc2eb` | 10,1:1 |
| Foco `#f8b531` sobre fondo `#16042b` | 10,7:1 |

Para el texto sobre el hero uso una capa violeta oscura semitransparente encima de los dibujos, así el texto blanco mantiene contraste con cualquier ilustración.

## Qué mejoraría con más tiempo

filtros por categoría en la galería, formulario conectado a un backend, modo claro/oscuro

## Autora

Danna Ramirez, estudiante de Ingeniería Civil en Informática, Universidad Católica de Temuco.
