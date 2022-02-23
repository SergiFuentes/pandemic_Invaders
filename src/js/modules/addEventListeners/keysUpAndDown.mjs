import { keys } from "../../index.js";
import { game } from "../../index.js";
import { audioOnShoot } from "../audio.mjs";
import { player } from "../classModels/Player.mjs";
import { projectiles } from "../classModels/Projectile.mjs";
import { Projectile } from "../classModels/Projectile.mjs";

export { keysUpAndDown };

function keysUpAndDown(){
    addEventListener( "keydown", ( { key } ) =>
    {
    if (game.over) return
    switch (key) {
        case "4":
        keys[4].pressed = true;
        break;
        case "6":
            keys[6].pressed = true;
            break;
            case " ":
            
            projectiles.push(
                new Projectile({
                position: {
                    x: player.position.x,
                        y: player.position.y,
                    },
                    velocity: {
                        x: 0,
                        y: -15,
                    },
                    })
                );
                audioOnShoot()
                break;
            }
            });
            
    addEventListener("keyup", ({ key }) => {
            switch (key) {
                case "4":
        keys[4].pressed = false;
        break;
        case "6":
        keys[6].pressed = false;
        break;
        case " ":
        keys[" "].pressed = false;
        break;
        }
    } )
}