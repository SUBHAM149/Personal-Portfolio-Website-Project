/* ===============================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* ===============================
   STICKY NAVBAR + ACTIVE LINK
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document
                    .querySelector(`.nav-links a[href*=${id}]`)
                    .classList.add("active");
            });
        }
    });
});

/* ===============================
   SCROLL REVEAL ANIMATION
================================ */
const revealElements = document.querySelectorAll(
    ".hero-content, .hero-img, .about, .skills, .projects, .contact"
);

function revealOnScroll() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

/* ===============================
   TYPING EFFECT (HERO)
================================ */
const textArray = ["Frontend Developer", "UI Designer", "Web Creator"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.querySelector(".hero-content h3");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 80);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}
typeEffect();

/* ===============================
   SKILLS HOVER SOUND EFFECT (UI FEEL)
================================ */
document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        skill.style.transform = "scale(1.1)";
    });
    skill.addEventListener("mouseleave", () => {
        skill.style.transform = "scale(1)";
    });
});

/* ===============================
   CONTACT FORM VALIDATION
================================ */
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']");
    const email = this.querySelector("input[type='email']");
    const message = this.querySelector("textarea");

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("⚠️ Please fill all fields");
        return;
    }

    alert("✅ Message sent successfully!");
    this.reset();
});

/* ===============================
   BACK TO TOP BUTTON
================================ */
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===============================
   CUSTOM CURSOR GLOW
================================ */
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

/* ===============================
   PAGE LOAD FADE IN
================================ */
window.onload = () => {
    document.body.classList.add("loaded");
};
/* TYPING EFFECT */
const roles = [
    "Frontend Developer",
    "UI Designer",
    "Web Enthusiast"
];

let roleIndex = 0;

const typingElement = document.querySelector(".typing");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 60);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

typeRole();
