class Player {
  constructor(game) {
    this.game = game;
    this.width = 70;
    this.height = 35;
    this.positionX = 350;
    this.positionY = 200;
    /*     this.speedX = 0;
    this.speedY = 0; */
    //this.gravity = 1;
    this.direction = 'east';
    this.animationToggle = false;
  }

  reset() {
    this.positionX = 350;
    this.positionY = 200;
    /*    this.speedX = 0;
    this.speedY = 0; */
  }

  /*   newPos() {
    this.positionY += this.speedY;
    this.positionX += this.speedX;
  } */

  checkBoundaries() {
    if (this.positionY <= 50) {
      this.positionY = 51;
      /*  this.speedY = 0; */
    }

    if (this.positionY > 600) {
      this.positionY = 599;
    }

    if (this.positionX <= 30) {
      this.positionX = 30;
    }
    if (this.positionX >= 670 - this.width) {
      this.positionX = 670 - this.width;
    }
  }

  runLogic() {
    /* this.newPos(); */
    this.checkBoundaries();
  }

  paint() {
    let playerImageUrlEast = './imgs/charmander_r.png';
    let playerImageUrlWest = './imgs/charmander_l.png';
    let playerImageUrlNorth = './imgs/charmander_n.png';
    let playerImageUrlSouth = './imgs/charmander_s.png';
    let playerImageUrlSouth2 = './imgs/charmander_s_2.png';
    let playerImageEast = new Image();
    playerImageEast.src = playerImageUrlEast;
    let playerImageWest = new Image();
    playerImageWest.src = playerImageUrlWest;
    let playerImageNorth = new Image();
    playerImageNorth.src = playerImageUrlNorth;
    let playerImageSouth = new Image();
    playerImageSouth.src = playerImageUrlSouth;
    let playerImageSouth2 = new Image();
    playerImageSouth2.src = playerImageUrlSouth2;
    if (this.game.player.direction === 'east') {
      this.game.context.drawImage(playerImageEast, this.positionX, this.positionY);
    } else if (this.game.player.direction === 'west') {
      this.game.context.drawImage(playerImageWest, this.positionX, this.positionY);
    } else if (this.game.player.direction === 'north') {
      this.game.context.drawImage(playerImageNorth, this.positionX, this.positionY);
    } else if (this.game.player.direction === 'south' && this.game.player.animationToggle) {
      this.game.context.drawImage(playerImageSouth2, this.positionX, this.positionY);
    } else {
      this.game.context.drawImage(playerImageSouth, this.positionX, this.positionY);
    }
  }
}
