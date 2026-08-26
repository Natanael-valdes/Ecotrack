/* =========================================================
   MENÚ HAMBURGUESA
========================================================= */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Cerrar menú al hacer clic en un enlace
        const links = navMenu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            const isClickInside = menuToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            }
        });
    }
});