// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll sections active link & sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Typed.js setup
const typed = new Typed('#typing-text', {
    strings: ['Data Science Student.', 'Machine Learning Enthusiast.', 'Python Developer.', 'AI Innovator.'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-btn');
const htmlTag = document.documentElement;

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') === 'dark') {
        htmlTag.setAttribute('data-theme', 'light');
        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.add('fa-moon');
    } else {
        htmlTag.setAttribute('data-theme', 'dark');
        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');
    }
});

// ScrollReveal Animations
ScrollReveal({ 
    reset: true, // Animates elements each time they scroll into view
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content, .skills-container, .education-container, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-text h3, .contact-header', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-text p', { origin: 'right' });

// Achievements section animations
ScrollReveal().reveal('.achievements-header', { origin: 'top', distance: '60px', duration: 1200 });
ScrollReveal().reveal('.ach-card', { origin: 'bottom', distance: '60px', duration: 1000, interval: 150 });

// Training section animations
ScrollReveal().reveal('.training .heading', { origin: 'top' });
ScrollReveal().reveal('.training-card', { origin: 'bottom', duration: 1200 });

// Certificates section animations
ScrollReveal().reveal('.certificates .heading', { origin: 'top' });
ScrollReveal().reveal('.cert-card', { origin: 'bottom', interval: 200 });

// Certificate Modal
const certModal    = document.getElementById('cert-modal');
const openCertBtn  = document.getElementById('open-cert-btn');
const closeCertBtn = document.getElementById('cert-close-btn');
const certBackdrop = document.getElementById('cert-backdrop');

function openModal()  { certModal.classList.add('active');    document.body.style.overflow = 'hidden'; }
function closeModal() { certModal.classList.remove('active'); document.body.style.overflow = ''; }

if (openCertBtn)  openCertBtn.addEventListener('click',  openModal);
if (closeCertBtn) closeCertBtn.addEventListener('click', closeModal);
if (certBackdrop) certBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Custom Cursor — smooth interactive cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let outlineX = mouseX;
let outlineY = mouseY;
const LERP = 0.12; // smoothing factor (lower = more lag, more dreamy)

// Track mouse position
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot snaps instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top  = `${mouseY}px`;
});

// Smooth ring animation loop
function animateCursor() {
    // Lerp the outline toward mouse
    outlineX += (mouseX - outlineX) * LERP;
    outlineY += (mouseY - outlineY) * LERP;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top  = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
const interactiveSelectors = 'a, button, .btn, .btn-project, .btn-archive, .tech-badge, .project-card, .edu-card, .theme-toggle, .menu-btn, input, textarea, label';

document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// Click effect
document.addEventListener('mousedown', () => document.body.classList.add('cursor-clicking'));
document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-clicking'));

// Hide cursor when leaving window, show when entering
document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '0.85';
});
