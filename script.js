const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll(".nav-item");

function openMenu() {
  navLinks.classList.add("open");
  overlay.classList.add("open");
  hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

function closeMenu() {
  navLinks.classList.remove("open");
  overlay.classList.remove("open");
  hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

function toggleMenu() {
  if (navLinks.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    closeMenu();
  });
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

// Seleccionar elementos
const btnAnfitrion = document.getElementById("btn-anfitrion");
const modalAnfitrion = document.getElementById("modal-anfitrion");
const closeModal = document.querySelector(".close");

// Abrir el modal
btnAnfitrion.addEventListener("click", () => {
  modalAnfitrion.style.display = "block";
});

// Cerrar el modal cuando se haga clic en la "X"
closeModal.addEventListener("click", () => {
  modalAnfitrion.style.display = "none";
});

// Cerrar el modal cuando se haga clic fuera de la ventana
window.addEventListener("click", (event) => {
  if (event.target === modalAnfitrion) {
    modalAnfitrion.style.display = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// // Detener el video cuando se cierra el modal
// document
//   .getElementById("videoModal")
//   .addEventListener("hidden.bs.modal", function () {
//     let video = document.getElementById("videoFrame");
//     video.pause();
//     video.currentTime = 0;
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   Fancybox.bind("[data-fancybox='gallery']", {
//     Toolbar: {
//       display: ["zoom", "close"],
//     },
//     Thumbs: {
//       autoStart: true,
//     },
//     animationEffect: "zoom",
//     video: {
//       autoStart: false,
//       controls: true,
//     },
//     caption: function (fancybox, carousel, slide) {
//       return slide.caption || "";
//     },
//   });

//   document.addEventListener("close.fancybox", function () {
//     document.activeElement.blur(); // Quita el foco de cualquier elemento dentro del modal
//   });
// });
