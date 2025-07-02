// acordeon
    document.addEventListener("DOMContentLoaded", () => {
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
});


