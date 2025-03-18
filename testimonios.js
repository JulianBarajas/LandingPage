const testimonios = [
  {
    nombre: "Santiago",
    texto:
      "Muy bien ubicado, muy bonito el apartamento y muy buena la atención de los dueños",
    imagen: "img/Reseña1_Santiago.png",
  },
  {
    nombre: "Martin David",
    texto:
      "Esta muy bien ubicado, el personal del edificio y los host son muy amigables",
    imagen: "img/Martin_Reseña2.png",
  },
  {
    nombre: "Hélder",
    texto:
      "Este lugar vale cada centavo en él, esta no fue mi primera vez aquí y tengo la sensación de que no será el último.",
    imagen: "img/Hélder_reseña3.png",
  },
  {
    nombre: "Monica Maria",
    texto: "Maravillosa estadía",
    imagen: "img/Monica_reseña4.png",
  },
  {
    nombre: "Maria",
    texto:
      "Nuestra estancia no podría ser más perfecta… Johana y Jairo fueron muy atentos y muy comunicativos.",
    imagen: "img/Maria_reseña5.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const indicadores = document.getElementById("carouselIndicators");
  const inner = document.getElementById("carouselInner");

  testimonios.forEach((testimonio, index) => {
    // Crear indicador
    const indicador = document.createElement("button");
    indicador.type = "button";
    indicador.setAttribute("data-bs-target", "#reviewCarousel");
    indicador.setAttribute("data-bs-slide-to", index);
    indicador.className = index === 0 ? "active" : "";
    indicadores.appendChild(indicador);

    // Crear slide del carrusel
    const slide = document.createElement("div");
    slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
    slide.innerHTML = `
        <div class="text-center">
          <img src="${testimonio.imagen}" class="reseña-imagen" alt="${testimonio.nombre}" width="80" loading="lazy" />
          <h3>${testimonio.nombre}</h3>
          <p class="text-muted">"${testimonio.texto}"</p>
        </div>
      `;
    inner.appendChild(slide);
  });
});
