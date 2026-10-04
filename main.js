// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});