import { canvas, c } from "./modules/canvas.mjs";
import { player } from "./modules/classModels/Player.mjs";
import { projectiles } from "./modules/classModels/Projectile.mjs";
import { showParticles } from "./modules/animateFunctions/showParticles.mjs";
import { showStars } from "./modules/gameFunctions/showStars.mjs";
import { showShips } from "./modules/gameFunctions/showShips.mjs";
import { showProjectiles } from "./modules/animateFunctions/showProjectiles.mjs";
import { showInvaderProjectiles } from "./modules/animateFunctions/showInvaderProjectiles.mjs";
import { playPauseGame } from "./modules/gameFunctions/playpauseGame.mjs";
import { showGrids } from "./modules/animateFunctions/showGrids.mjs";
import { projectilesColision } from "./modules/animateFunctions/projectilesColision.mjs";
import { moveShip } from "./modules/animateFunctions/moveShip.mjs";
import { addGrids } from "./modules/animateFunctions/addGrids.mjs";
import { keysUpAndDown } from "./modules/addEventListeners/keysUpAndDown.mjs";
import { start } from "./modules/addEventListeners/buttonStart.mjs";
import { reTry } from "./modules/addEventListeners/buttonAgain.mjs";
import { waveNumber, waveNum } from "./modules/animateFunctions/showGrids.mjs";

export { game };
export { projectiles };
export { player };
export { particles };
export { grids };
export { invaderProjectiles };
export { keys };
export { animate };

canvas.width = 1024;
canvas.height = 720;


const actualLives = document.querySelector("#actualLives");
actualLives.innerHTML = player.lives;
const grids = [];
const invaderProjectiles = [];
const particles = [];
const keys = {
  4: {
    pressed: false,
  },
  6: {
    pressed: false,
  },
  " ": {
    pressed: false,
  },
};

let game = {
  over: false,
  active: true,
};

showShips();

showStars();

playPauseGame();

start();

function animate() {
  if (!game.active) return;

  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  waveNum.innerHTML = waveNumber;

  showParticles();

  showInvaderProjectiles();

  showProjectiles();

  showGrids();

  projectilesColision();

  moveShip();

  addGrids();
}

reTry();

keysUpAndDown();



