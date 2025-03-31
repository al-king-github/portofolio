/* function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
} */
/* script.js */

const texts = ["Ingénieur | Développeur Full Stack", "Créateur de solutions numériques", "Expert en cybersécurité"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

function type() {
    if (index < texts[count].length) {
        currentText += texts[count][index];
        document.getElementById("animated-text").textContent = currentText;
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (index > 0) {
        currentText = currentText.slice(0, -1);
        document.getElementById("animated-text").textContent = currentText;
        index--;
        setTimeout(erase, erasingSpeed);
    } else {
        count = (count + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingSpeed);
});
