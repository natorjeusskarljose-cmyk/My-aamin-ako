const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const box = document.querySelector(".box");
const answer = document.getElementById("answer");


/* HINDE BUTTON - TATAKAS */

function moveNoButton() {

    const boxRect = box.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();

    const maxX = boxRect.width - buttonRect.width - 10;
    const maxY = boxRect.height - buttonRect.height - 10;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noBtn.style.bottom = "auto";
}


/* Kapag lalapitan/pipindutin ang Hinde */

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
});

noBtn.addEventListener("click", function(event) {
    event.preventDefault();
    moveNoButton();
});


/* OO BUTTON */

yesBtn.addEventListener("click", function() {

    box.style.display = "none";

    answer.style.display = "flex";
});


/* BALIK */

function back() {

    answer.style.display = "none";

    box.style.display = "flex";

    noBtn.style.left = "58%";
    noBtn.style.top = "auto";
    noBtn.style.bottom = "85px";
}