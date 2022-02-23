import { particles } from "../../index.js";
import { Particle } from "../classModels/Particle.mjs";

export { showStars };

function showStars() {
  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle({
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        },
        velocity: {
          x: 0,
          y: 1,
        },
        radius: Math.random() * 2,
        color: "white",
      })
    );
  }

  for (let i = 0; i < 50; i++) {
    particles.push(
      new Particle({
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        },
        velocity: {
          x: 0,
          y: Math.random() * 3,
        },
        radius: Math.random() * 2,
        color: "white",
      })
    );
  }
}