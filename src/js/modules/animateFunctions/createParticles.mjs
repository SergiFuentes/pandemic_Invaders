import { particles } from "../../index.js";
import { Particle } from "../classModels/Particle.mjs";

    
export { createParticles };

function createParticles({ object, color, fades }) {
      
    for (let i = 0; i < 15; i++) {
      particles.push(
        new Particle({
          position: {
            x: object.position.x + object.width / 2,
            y: object.position.y + object.height / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          },
          radius: Math.random() * 3,
          color,
          fades
        })
      )
    }
  }