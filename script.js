// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Typing Effect
const text = [
    "AI & Data Science Student",
    "Data Analyst",
    "Python Developer",
    "Web Developer"
];

let textIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (typing) {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex++);

        if (charIndex > text[textIndex].length) {

            typing = false;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            text[textIndex].substring(0, charIndex--);

        if (charIndex < 0) {

            typing = true;

            textIndex++;

            if (textIndex >= text.length)
                textIndex = 0;
        }

    }

    setTimeout(typeEffect, typing ? 120 : 60);
}

typeEffect();

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});