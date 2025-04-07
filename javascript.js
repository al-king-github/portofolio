// Animation de texte
const texts = [
    "Développeur Full-Stack", 
    "Expert en Cybersécurité",
    "Administrateur Systèmes",
    "Passionné de Technologie"
];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
let speed = 100;

function type() {
    const fullText = texts[count];
    
    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }
    document.querySelector("#animated-text").textContent=currentText;
   // document.getElementById("").textContent = currentText;
    
    if (!isDeleting && currentText === fullText) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        count = (count + 1) % texts.length;
        speed = 100;
    }
    setTimeout(type, isDeleting ? 100 : speed);
}

// Initialiser l'animation
document.addEventListener("DOMContentLoaded", function() {
    type();
    // Activer les tooltips Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});