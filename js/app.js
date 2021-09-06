let game = new Game();
game.start();

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", game.restart);
