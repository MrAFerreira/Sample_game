class Controller {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
    this.$buttonReset = document.getElementById('btn-reset');
    this.$buttonPause = document.getElementById('btn-pause');
    this.$titleButton = document.getElementById('title-button');
    this.$titleScreen = document.getElementById('title-screen');
    this.$gameOverScreen = document.getElementById('game-over-screen');
    this.$winScreen = document.getElementById('win-screen');
    this.$infoScreen = document.getElementById('info-screen');
    this.$infoButton = document.getElementById('btn-info');
    this.$tryAgainButtonOver = document.querySelector('#game-over-screen .try-again-button');
    this.$tryAgainButtonWin = document.querySelector('#win-screen .try-again-button');
    this.$difficultyLevels = document.getElementById('difficulty-levels');
    this.$easyButton = document.getElementById('btn-easy');
    this.$normalButton = document.getElementById('btn-normal');
    this.$hardButton = document.getElementById('btn-hard');
  }

  changeScreens() {
    this.$titleScreen.classList.toggle('fade-out');
    this.$difficultyLevels.classList.remove('fade-in');
    this.$difficultyLevels.classList.toggle('fade-out');
    this.$gameOverScreen.classList.toggle('fade-out');
    this.$winScreen.classList.toggle('fade-out');
    this.$infoScreen.classList.toggle('fade-out');
    this.game.gameIsRunning = true;
    this.game.start();
  }

  keyboardEventListeners() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'w':
          this.player.positionY += -1;

          this.player.direction = 'north';
          break;
        case 's':
          this.player.positionY += 1;
          this.player.direction = 'south';
          this.player.animationToggle = !this.player.animationToggle;
          break;
        case 'a':
          this.player.positionX += -3;
          this.player.direction = 'west';
          break;
        case 'd':
          this.player.positionX += 3;

          this.player.direction = 'east';
          break;
      }
    });
  }
}
