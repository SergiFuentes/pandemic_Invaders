import { particles } from "../../index.js";
export { showParticles };
    
function showParticles(){
particles.forEach( ( particle, i ) =>
{
  if ( particle.position.y - particle.radius >= canvas.height )
  {
        particle.position.x = Math.random()*canvas.width
        particle.position.y = -particle.radius
      }
    if (particle.opacity <= 0) {
    setTimeout(() => {
        particles.splice(i, 1);
      }, 0);
    } else {
      particle.update();
    }
} )
}