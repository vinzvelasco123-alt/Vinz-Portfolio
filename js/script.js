// TYPEWRITER EFFECT

const text = "General Virtual Assistance";
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

// CONTACT FORM STATUS
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        formStatus.textContent = 'Sending your message...';
        formStatus.className = 'form-status';

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.classList.add('success');
                contactForm.reset();
            } else {
                const data = await response.json();
                formStatus.textContent = data.error ? data.error : 'Oops! Something went wrong.';
                formStatus.classList.add('error');
            }
        } catch (error) {
            formStatus.textContent = 'Unable to send message. Please try again later.';
            formStatus.classList.add('error');
        }
    });
}

