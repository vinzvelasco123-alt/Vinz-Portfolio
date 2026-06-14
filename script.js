/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

const hiddenElements =
document.querySelectorAll('.card');

hiddenElements.forEach((el)=>{

    el.classList.add('hidden');

    observer.observe(el);

});


/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active");
        }

    });

});


/* =========================
   HERO BUTTON EFFECT
========================= */

const buttons =
document.querySelectorAll('.btn');

buttons.forEach(btn => {

    btn.addEventListener('mouseenter', () => {

        btn.style.transform =
        'translateY(-5px) scale(1.05)';

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform =
        'translateY(0) scale(1)';

    });

});


/* =========================
   TYPEWRITER EFFECT
========================= */

const text =
"Professional Virtual Assistant";

let index = 0;

const typeTarget =
document.querySelector(".typing");

if(typeTarget){

    function typeWriter(){

        if(index < text.length){

            typeTarget.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(typeWriter,80);
        }
    }

    typeWriter();
}