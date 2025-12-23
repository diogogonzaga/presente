const gift = document.getElementById("gift");
const poem = document.getElementById("poem");
const container = document.querySelector(".container");

let isOpen = false;

gift.addEventListener("click", () => {
    if (!isOpen) {
        // ABRIR
        gift.classList.add("opened");
        container.classList.add("opened-layout");
        poem.classList.add("visible");

        // brilho
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        gift.appendChild(sparkle);
        sparkle.addEventListener("animationend", () => sparkle.remove());

        isOpen = true;
    } else {
        // FECHAR
        gift.classList.remove("opened");
        container.classList.remove("opened-layout");
        poem.classList.remove("visible");

        isOpen = false;
    }
});
