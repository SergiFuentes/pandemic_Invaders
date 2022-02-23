export { Projectile, projectiles };
    
import { c } from '../canvas.mjs';
import { player } from './Player.mjs';

const projectiles = [];

class Projectile {
    constructor({ position, velocity }) {
      this.position = position;
      this.velocity = velocity;
      this.radius = 6;
  
      const image = new Image();
      image.src = "assets/img/Proyectil.png";
      image.onload = () => {
        const scale = 0.08;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
          x: player.position.x + 20,
          y: player.position.y,
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
  
