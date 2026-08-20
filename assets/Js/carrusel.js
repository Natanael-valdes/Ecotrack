


/* =========================================================
   CARRUSEL ECOTRACK
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

let slideIndex = 0;

const slidesContainer =
    document.querySelector(".slides");

const slideElements =
    document.querySelectorAll(".slide");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");

const carousel =
    document.querySelector(".carousel");

const totalSlides =
    slideElements.length;


/* =========================================================
   VERIFICAR QUE EL CARRUSEL EXISTA
========================================================= */

if (
    slidesContainer &&
    carousel &&
    totalSlides > 0
) {


    /* =====================================================
       CREAR INDICADORES
    ====================================================== */

    const indicatorsContainer =
        document.createElement("div");

    indicatorsContainer.classList.add(
        "carousel-indicators"
    );

    carousel.appendChild(
        indicatorsContainer
    );


    /* =====================================================
       CREAR UN INDICADOR POR CADA SLIDE
    ====================================================== */

    slideElements.forEach((slide, index) => {

        const indicator =
            document.createElement("span");

        indicator.setAttribute(
            "aria-label",
            `Go to slide ${index + 1}`
        );

        indicator.setAttribute(
            "role",
            "button"
        );

        if (index === 0) {

            indicator.classList.add(
                "active"
            );

        }


        /* ================================================
           CLICK EN INDICADOR
        ================================================= */

        indicator.addEventListener(
            "click",
            () => {
                slideIndex = index;
                showSlide(slideIndex);
                resetAutoPlay();
            }
        );


        indicatorsContainer.appendChild(
            indicator
        );

    });


    const indicators =
        document.querySelectorAll(
            ".carousel-indicators span"
        );


    /* =====================================================
       MOSTRAR SLIDE
    ====================================================== */

    function showSlide(index) {
        slidesContainer.style.transform =
            `translateX(-${index * 100}%)`;


        /* ================================================
           ACTUALIZAR SLIDE ACTIVO
        ================================================= */

        slideElements.forEach(
            (slide, i) => {
                slide.classList.remove(
                    "active"
                );

                if (i === index) {
                    slide.classList.add(
                        "active"
                    );
                }
            }
        );


        /* ================================================
           ACTUALIZAR INDICADORES
        ================================================= */

        indicators.forEach(
            (indicator, i) => {
                indicator.classList.remove(
                    "active"
                );

                if (i === index) {
                    indicator.classList.add(
                        "active"
                    );
                }
            }
        );
    }


    /* =====================================================
       SIGUIENTE
    ====================================================== */

    if (nextButton) {
        nextButton.addEventListener(
            "click",
            () => {
                slideIndex =
                    (slideIndex + 1)
                    % totalSlides;
                showSlide(slideIndex);
                resetAutoPlay();
            }
        );
    }


    /* =====================================================
       ANTERIOR
    ====================================================== */

    if (prevButton) {
        prevButton.addEventListener(
            "click",
            () => {
                slideIndex =
                    (slideIndex - 1 + totalSlides)
                    % totalSlides;
                showSlide(slideIndex);
                resetAutoPlay();
            }
        );
    }


    /* =====================================================
       AUTOPLAY
    ====================================================== */

    let autoPlay =
        setInterval(
            () => {
                slideIndex =
                    (slideIndex + 1)
                    % totalSlides;
                showSlide(slideIndex);
            },
            5000
        );


    /* =====================================================
       REINICIAR AUTOPLAY
       CUANDO EL USUARIO INTERACTÚA
    ====================================================== */

    function resetAutoPlay() {

        clearInterval(autoPlay);
        autoPlay =
            setInterval(
                () => {
                    slideIndex =
                        (slideIndex + 1)
                        % totalSlides;
                    showSlide(slideIndex);
                },
                5000
            );
    }


    /* =====================================================
       PAUSAR AL PASAR EL MOUSE
    ====================================================== */

    carousel.addEventListener(
        "mouseenter",
        () => {
            clearInterval(autoPlay);
        }
    );


    /* =====================================================
       REANUDAR AL SACAR EL MOUSE
    ====================================================== */

    carousel.addEventListener(
        "mouseleave",
        () => {
            resetAutoPlay();
        }
    );


    /* =====================================================
       SOPORTE PARA TECLADO
       FLECHA IZQUIERDA / DERECHA
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "ArrowRight"
            ) {
                slideIndex =
                    (slideIndex + 1)
                    % totalSlides;
                showSlide(slideIndex);
                resetAutoPlay();
            }


            if (
                event.key === "ArrowLeft"
            ) {
                slideIndex =
                    (slideIndex - 1 + totalSlides)
                    % totalSlides;
                showSlide(slideIndex);
                resetAutoPlay();
            }
        }
    );


    /* =====================================================
       SOPORTE PARA TOUCH / CELULAR
    ====================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    carousel.addEventListener(
        "touchstart",
        (event) => {
            touchStartX =
                event.changedTouches[0].screenX;
        },
        {
            passive: true
        }
    );


    carousel.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const swipeDistance =
            touchStartX - touchEndX;


        /* Deslizar hacia la izquierda */

        if (swipeDistance > 50) {

            slideIndex =
                (slideIndex + 1)
                % totalSlides;

            showSlide(slideIndex);

            resetAutoPlay();

        }


        /* Deslizar hacia la derecha */

        if (swipeDistance < -50) {

            slideIndex =
                (slideIndex - 1 + totalSlides)
                % totalSlides;

            showSlide(slideIndex);

            resetAutoPlay();

        }

    }


    /* =====================================================
       INICIAR
    ====================================================== */

    showSlide(slideIndex);

}