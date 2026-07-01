// Video auto message
const video = document.querySelector("video");

video.addEventListener("play", () => {
    console.log("Brand story is playing...");
});

// Smooth text appearance
const paragraphs = document.querySelectorAll(".container p");

paragraphs.forEach((p, index) => {
    p.style.opacity = "0";
    p.style.transition = "1s";

    setTimeout(() => {
        p.style.opacity = "1";
    }, index * 700);
});