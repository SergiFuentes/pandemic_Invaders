export { InvaderProjectile };
import { c } from '../canvas.mjs';
import { score } from '../animateFunctions/showGrids.mjs';

class InvaderProjectile {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
  
      let scale = 0.1;
      let imgArray = [
        "assets/img/Syringe1.png",
        "assets/img/Syringe2.png",
        "assets/img/Syringe3.png",
        "assets/img/Syringe4.png",
      ];
      if ( score > 10000 )
      {
        imgArray = [
          "assets/img/maskBlue.png",
          "assets/img/maskRed.png",
          "assets/img/maskYellow.png",
          "assets/img/maskGreen.png",
          "assets/img/maskPurple.png",
        ];
         scale = 1
      }
      const image = new Image();
      let rand = Math.floor(Math.random() * imgArray.length);
      image.src = imgArray[rand];
      image.onload = () => {
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
          x: this.position.x + 20,
          y: this.position.y,
        };
      };
    }
  
    draw() {
      c.beginPath();
      if (this.image)
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      c.restore();
      c.closePath();
    }
  
    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }