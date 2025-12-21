const gift = document.getElementById("gift");
const poem = document.getElementById("poem");

gift.addEventListener("click", () => {
    if (gift.classList.contains("opened")) return;

    gift.classList.add("opened");

    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    gift.appendChild(sparkle);

    setTimeout(() => {
        poem.style.display = "block";
    }, 900);
});
