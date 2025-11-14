let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage = document.querySelectorAll("img")[0];
randomImage.setAttribute("src", `images/dice${randomNumber1}.png`);
let randomImage2 = document.querySelectorAll("img")[1];
randomImage2.setAttribute("src", `images/dice${randomNumber2}.png`);

let result = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "Player 2 Wins! 🚩";
} else {
    result.innerHTML = "It's a Draw!";
};