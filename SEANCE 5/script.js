document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btn_head");
    if (btnMenu) {
        btnMenu.addEventListener("mouseenter", () => {
            btnMenu.style.transition = "0.3s";
            btnMenu.style.letterSpacing = "3px";
        });
        btnMenu.addEventListener("mouseleave", () => {
            btnMenu.style.letterSpacing = "normal";
        });
    }

    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});

document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});