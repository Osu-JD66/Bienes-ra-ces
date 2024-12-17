document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');
    const menuClose = document.querySelector('.menu-close');
    const menuLinks = document.querySelectorAll('nav ul li a'); // Selecciona todos los enlaces en el menú

    // Mostrar el menú cuando se hace clic en el botón de menú
    menuToggle.addEventListener('click', function() {
        menu.classList.add('show-menu');
    });

    // Cerrar el menú cuando se hace clic en el botón de cerrar
    menuClose.addEventListener('click', function() {
        menu.classList.remove('show-menu');
    });

    // Cerrar el menú cuando se hace clic en cualquier enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show-menu');
        });
    });
});

window.addEventListener('scroll', function() {
    const section = document.querySelector('.sobre-nosotros');
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (position < screenHeight) {
      section.classList.add('visible');
    }
});

// Obtener el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando se desplaza hacia abajo 100px desde la parte superior del documento
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Cuando se hace clic en el botón, se desplaza hasta la parte superior de la página
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};



// --------------------------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".gallery-item img").forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});