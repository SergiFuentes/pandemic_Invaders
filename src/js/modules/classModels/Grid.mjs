export { Grid };
  
import { Invader } from './Invader.mjs';
import { score } from '../animateFunctions/showGrids.mjs';

class Grid {
    constructor() {
      this.position = {
        x: 0,
        y: 0,
      };
      let wave = 3
      let columns = Math.floor(Math.random() * 10 + 2);
      let rows = Math.floor(Math.random() * 5 + 2);

      this.invaders = [];
      
      if ( score > 10000 )
      {
        wave = 10;
        columns = Math.floor( Math.random() * 10 + 5 );
        rows = Math.floor(Math.random() * 6 + 3);
      } 

      this.velocity = {
        x: wave,
        y: 0,
      };
  
  
      this.width = columns * 30;
  
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          this.invaders.push(
            new Invader({
              position: {
                x: x * 30,
                y: y * 30,
              },
            })
          );
        }
      }
    }
  
    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      this.velocity.y = 0;
  
      if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
        this.velocity.x = -this.velocity.x;
        this.velocity.y = 30;
      }
    }
};
