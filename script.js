const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

// Abrir/Cerrar el menú al hacer clic en el ícono del menú hamburguesa
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

// Cerrar el menú al hacer clic fuera del menú
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Script de interaccion FAQ
// Selecciona todas las preguntas de la FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Encuentra la respuesta asociada
    const answer = question.nextElementSibling;

    // Alternar clase "open" para mostrar/ocultar la respuesta
    answer.classList.toggle("open");

    // Cambiar el icono entre "+" y "-"
    const icon = question.querySelector(".faq-icon");
    icon.textContent = answer.classList.contains("open") ? "-" : "+";
  });
});

// Sección para destacar donde está el usuario

// document.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".navbar a");

//   let currentSection = "";

//   // Detecta la sección en el viewport
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 50; // Ajusta según la altura de tu header
//     const sectionHeight = section.offsetHeight;

//     if (
//       window.scrollY >= sectionTop &&
//       window.scrollY < sectionTop + sectionHeight
//     ) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   // Resalta el enlace correspondiente
//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").includes(currentSection)) {
//       link.classList.add("active");
//     }
//   });
// });

// ------------------------------------------------------------------------------- //
