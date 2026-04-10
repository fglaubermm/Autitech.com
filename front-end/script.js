let index = 0;
const slides = document.querySelectorAll(".slide");
let autoPlay;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function startAutoPlay() {
    autoPlay = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
    resetAutoPlay();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    resetAutoPlay();
});

startAutoPlay();



const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn && prevBtn) {

    let index = 0;
    const slides = document.querySelectorAll(".slide");
    let autoPlay;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    function startAutoPlay() {
        autoPlay = setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
        resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
        resetAutoPlay();
    });

    startAutoPlay();
}

// =====================
// MENU MOBILE
// =====================

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}