// Welcome Alert
window.onload = function () {
    setTimeout(() => {
        alert("Welcome to Shaheen Suits - Premium Fashion Brand");
    }, 500);
};

// Navbar active highlight
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Smooth fade effect on page load
document.body.style.opacity = 0;

window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
});

// Image hover dynamic shadow
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.boxShadow = "none";
    });
});