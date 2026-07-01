// Luxury card animation on scroll
const boxes = document.querySelectorAll(".suit-box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const position = box.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
boxes.forEach(box => {
    box.style.opacity = "0";
    box.style.transform = "translateY(50px)";
    box.style.transition = "all 0.8s ease";
});

// Click to enlarge image
const suitImages = document.querySelectorAll(".suit-box img");

suitImages.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoom");
    });
});