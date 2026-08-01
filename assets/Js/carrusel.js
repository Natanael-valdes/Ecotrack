
let slideIndex = 0;

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index){
    slides.style.transform =
    `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click",()=>{
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click",()=>{
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

setInterval(()=>{
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
},4000);
