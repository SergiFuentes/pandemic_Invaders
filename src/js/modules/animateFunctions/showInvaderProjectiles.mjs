import { invaderProjectiles } from "../../index.js";
import { game } from "../../index.js";
import { player } from "../../index.js";
import { audioOnHitShip } from "../audio.mjs";
import { audioOnGameOver } from "../audio.mjs";
import { showShips } from "../gameFunctions/showShips.mjs";
import { createParticles } from "../animateFunctions/createParticles.mjs";

export {showInvaderProjectiles}

function showInvaderProjectiles(){
    invaderProjectiles.forEach((invaderProjectile, index) => {
        
        if (
        invaderProjectile.position.y + invaderProjectile.height >= player.position.y &&
        invaderProjectile.position.x + invaderProjectile.width >= player.position.x - ( player.width / 32 ) && invaderProjectile.position.x <= player.position.x + player.width
        )
        {
        if ( player.lives >= 1 )
        {
            audioOnHitShip()
            invaderProjectiles.splice( index, 1 );
            player.lives--
            actualLives.innerHTML = player.lives
            showShips()
            game.over = false
            game.active = true 
            createParticles({
            object: player,
            color: 'orange',
            fades: true
            } );
            player.opacity = 0
            setTimeout( () =>
            {
            if ( player.lives >= 1 )
            {
                player.opacity = 1
            }
            }, 1000 )
            
        }
        
        if ( player.lives === 0 )
        {
            setTimeout( () =>
            {
            invaderProjectiles.splice( index, 1 )
            player.opacity = 0
            actualLives.innerHTML = player.lives
            game.over = true
            }, 0 )
            setTimeout( () =>
            {
            audioOnGameOver()
            game.active = false
            gameOver.innerHTML = 'GAME OVER';
            }, 2000 )
            setTimeout( () =>
            {
            buttonAgain.innerHTML = 'ReTry???'
            }, 3000 )
            createParticles( {
            object: player,
            color: 'orange',
            fades: true
            } );
            
        }
            
        }
        if (
        invaderProjectile.position.y + invaderProjectile.height >=
        canvas.height
        ) {
            setTimeout(() => {
            invaderProjectiles.splice(index, 1);
            }, 0);
        } else {
            invaderProjectile.update();
        }
    } )
}