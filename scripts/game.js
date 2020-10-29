class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.player = new Player(this);
    this.controller = new Controller(this);
    this.controller.keyboardEventListeners();
    this.gameStarted = true;
    this.gameIsRunning = true;
    this.difficulty = 1000;
  }

  start() {
    this.loop();
  }

  loop() {
    game.context.clearRect(0, 0, $canvas.width, $canvas.height);
    game.paint();
    game.runLogic();
    if (this.gameIsRunning) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }

  background() {
    this.context.save();
    this.context.fillStyle = 'rgba(10, 10, 10, 0.3)';
    this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.context.restore();
  }

  clearScreen() {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paint() {
    this.clearScreen();
    this.background();
    this.player.paint();
  }

  runLogic() {
    this.player.runLogic();
  }
}
