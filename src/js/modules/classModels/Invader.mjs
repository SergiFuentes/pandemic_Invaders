export { Invader };

import { c } from '../canvas.mjs';
import { InvaderProjectile } from './InvaderProjectile.mjs';
import { score } from '../animateFunctions/showGrids.mjs';

class Invader {
    constructor({ position }) {
      this.position = position;
      this.velocity = {
        x: 0,
        y: 0,
      };
  
      const imgArray = [
        "assets/img/invaderRed.png",
        "assets/img/invaderGreen.png",
        "assets/img/invaderYellow.png",
      ];
      const image = new Image();
      let rand = Math.floor(Math.random() * imgArray.length);
      image.src = imgArray[rand];
      image.onload = () => {
        const scale = 1;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
          x: position.x,
          y: position.y,
        };
      };
    }
  
    draw() {
      if (this.image)
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
    }
  
    update({ velocity }) {
      if (this.image) {
        this.draw();
        this.position.x += velocity.x;
        this.position.y += velocity.y;
      }
    }

  
  shoot ( invaderProjectiles )
  {
    let wave = 5

      if ( score > 10000 )
      {
        wave = 10;
      }  

      invaderProjectiles.push(
        new InvaderProjectile({
          position: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height,
          },
          velocity: {
            x: 0,
            y: wave,
          },
        })
      );
    }
};

