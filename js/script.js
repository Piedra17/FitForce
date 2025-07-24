

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".heade");
    const calendario = document.querySelector(".rutinas-banner");

    window.addEventListener("scroll", function () {
        const calenTop = calendario.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;

        if (scrollY + 80 >= calenTop) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});


const cards = document.querySelectorAll(".glowing-card");

cards.forEach((card) => {
  const glow = card.querySelector(".glow-border");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.setProperty("--x", `${x}px`);
    glow.style.setProperty("--y", `${y}px`);
    glow.style.setProperty("data-glow", glowColor);
  });
});
