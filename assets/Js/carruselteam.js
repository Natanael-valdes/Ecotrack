// =====================================================
// CARRUSEL TEAM - ECOTRACK
// =====================================================

let currentSlide = 0;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");


// =====================================================
// MOSTRAR SLIDE
// =====================================================

function showSlide(index) {

    // Comprobar límites
    if (index >= slides.length) {
        currentSlide = 0;
    } 
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    else {
        currentSlide = index;
    }


    // Quitar active de todos los slides
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });


    // Quitar active de todos los puntos
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    // Activar slide actual
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add("active");
    }


    // Activar punto actual
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}


// =====================================================
// SIGUIENTE
// =====================================================

function nextSlide() {
    showSlide(currentSlide + 1);
}


// =====================================================
// ANTERIOR
// =====================================================

function previousSlide() {
    showSlide(currentSlide - 1);
}


// =====================================================
// IR A SLIDE ESPECÍFICO
// =====================================================

function goToSlide(index) {
    showSlide(index);
}


// =====================================================
// INICIAR CARRUSEL
// =====================================================

// Mostrar la primera imagen
showSlide(0);


// =====================================================
// CAMBIO AUTOMÁTICO
// =====================================================

setInterval(function() {
    nextSlide();
}, 6000);