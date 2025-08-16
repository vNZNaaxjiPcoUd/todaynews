// script.js
function animateSlogan() {
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        slogan.style.animation = 'pulse 1s infinite alternate';
    }
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

let slideIndex = 0;
function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
}

function simulateProcess() {
    const simulation = document.getElementById('simulation');
    simulation.classList.remove('hidden');
    simulation.innerHTML = 'Simulating... (Animated steps)';
    setTimeout(() => simulation.classList.add('hidden'), 3000);
}

function highlightTable() {
    const table = document.querySelector('table');
    table.style.backgroundColor = '#ffff99';
    setTimeout(() => table.style.backgroundColor = '', 2000);
}

function enlargeImage(img) {
    img.style.transform = 'scale(1.5)';
    setTimeout(() => img.style.transform = 'scale(1)', 1000);
}

function calculateCost() {
    const result = document.getElementById('cost-result');
    result.innerHTML = 'Estimated Cost: $99 (Basic) - Customize in form!';
}

function showCertifications() {
    const certs = document.getElementById('certifications');
    certs.classList.remove('hidden');
}

function playTestimonial() {
    const video = document.getElementById('video-placeholder');
    video.innerHTML = 'Playing video... (Simulated)';
}

function submitForm() {
    alert('Form submitted! Thank you.');
}

// Initialize sliders on pages that have them
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].style.display = 'block';
    }
});
