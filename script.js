
const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const reopen = document.getElementById("reopen");
const hearts = document.getElementById("hearts");

let opened = false;

// Abrir a cartinha
envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(() => {
        intro.style.display = "none";
        letter.style.display = "block";
        reopen.style.display = "block";

        createHearts();
    }, 1100);

});

// Criar corações flutuantes
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.classList.add("heart");
        heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 12) + "px";
        heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }, 500);

}

// Ler novamente
reopen.addEventListener("click", () => {

    opened = false;

    letter.style.display = "none";
    reopen.style.display = "none";

    intro.style.display = "block";

    envelope.classList.remove("open");

});
