// TYPEWRITER EFFECT

const text = "Professional Virtual Assistant";
let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.querySelector(".typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);

    }

}

typingEffect();


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("current");

        }

    });

});


// HERO FLOATING EFFECT

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});
