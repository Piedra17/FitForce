const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function updateCarousel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
}

rightBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
        updateCarousel();
    }
});

leftBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

// Llamada inicial
updateCarousel();


const toggleBtn = document.getElementById('toggle-btn');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



 // acordeon
  const titulos = document.querySelectorAll(".acordeon-titulo");

  titulos.forEach((btn) => {
    btn.addEventListener("click", () => {
      const contenido = btn.nextElementSibling;

      btn.classList.toggle("activo");

      // Cierra otros
      document.querySelectorAll(".acordeon-contenido").forEach((el) => {
        if (el !== contenido) {
          el.style.maxHeight = null;
          el.previousElementSibling.classList.remove("activo");
        }
      });

      if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });