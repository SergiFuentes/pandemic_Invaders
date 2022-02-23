import { player } from "../../index.js";
import { keys } from "../../index.js";

export { moveShip };

function moveShip(){
  if (keys[4].pressed && player.position.x >= 0) {
    player.velocity.x = -7;
    player.rotation = -0.15;
  } else if (
    keys[6].pressed &&
    player.position.x + player.width <= canvas.width
    ) {
      player.velocity.x = 7;
    player.rotation = 0.15;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
    }
}