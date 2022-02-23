import { audioOnInvaderShoot, audioOnHitInvaders, audioOnExtraLive, audioOnGameOver } from "../audio.mjs";
import { player, game } from "../../index.js";
import { grids } from "../../index.js";
import { invaderProjectiles } from "../../index.js";
import { showShips } from "../gameFunctions/showShips.mjs";
import { projectiles } from "../classModels/Projectile.mjs";
import { createParticles } from "./createParticles.mjs";
import { frames } from "./addGrids.mjs";


export { score, waveNumber, waveNum };
export { showGrids };
    
let score = 0;
const scoreEl = document.querySelector("#scoreEl");
scoreEl.innerHTML = score;

let waveNumber = "First ";
const waveNum = document.querySelector("#waveNumber");


const colorArray = ["yellow", "red", "green"];

function showGrids() {
  grids.forEach((grid, gridIndex) => {
    grid.update();

    if (grid.position.y >= player.position.y - player.height * 1.5) {
      player.opacity = 0;
      createParticles({
        object: player,
        color: "orange",
        fades: true,
      });
      setTimeout(() => {
        game.over = true;
        audioOnGameOver();
        game.active = false;
        gameOver.innerHTML = "GAME OVER";
      }, 2000);
      setTimeout(() => {
        buttonAgain.innerHTML = "ReTry???";
      }, 3000);
    }

    // spawn projectiles
    if (frames % 100 === 0 && grids.length > 0) {
      setTimeout(() => {
        grids[Math.floor(Math.random() * grids.length)][
          grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(
            invaderProjectiles
          )
        ];
        audioOnInvaderShoot();
      }, Math.random() * 5000);
    }

    grid.invaders.forEach((invader, i) => {
      invader.update({ velocity: grid.velocity });

      projectiles.forEach((projectile, j) => {
        if (
          projectile.position.y - projectile.radius <=
            invader.position.y + invader.height &&
          projectile.position.x + projectile.radius >= invader.position.x &&
          projectile.position.x - projectile.radius <=
            invader.position.x + invader.width &&
          projectile.position.y + projectile.radius >= invader.position.y
        ) {
          audioOnHitInvaders();

          const invaderFound = grid.invaders.find(
            (invader2) => invader2 === invader
          );

          const projectileFound = projectiles.find(
            (projectile2) => projectile2 === projectile
          );
          //remove invader and projectile
          if (invaderFound && projectileFound) {
            if (score === 10000) {
              setTimeout(() => {
                extraLive.innerHTML = "wellCome to da <br> second Wave!!!";
                waveNumber = "Second ";
              }, 0);
              audioOnExtraLive();
              setTimeout(() => {
                extraLive.innerHTML = "";
              }, 4500);
            }
            if (score % 9900 === 0 && score > 0) {
              player.lives = player.lives + 1;
              actualLives.innerHTML = player.lives;
              setTimeout(() => {
                extraLive.innerHTML = "extrA livE!!!";
              }, 0);
              audioOnExtraLive();
              setTimeout(() => {
                extraLive.innerHTML = "";
              }, 3500);
            }
            showShips();
            score += 100;
            scoreEl.innerHTML = score;
            let randColor = Math.floor(Math.random() * colorArray.length);
            let particleColor = colorArray[randColor];
            createParticles({
              object: invader,
              fades: true,
              color: particleColor,
            });
            grid.invaders.splice(i, 1);
            projectiles.splice(j, 1);

            if (grid.invaders.length > 0) {
              const firstInvader = grid.invaders[0];
              const lastInvader = grid.invaders[grid.invaders.length - 1];

              grid.width =
                lastInvader.position.x -
                firstInvader.position.x +
                lastInvader.width;
              grid.position.x = firstInvader.position.x;
            } else {
              grids.splice(gridIndex, 1);
            }
          }
        }
      });
    });
  });
}