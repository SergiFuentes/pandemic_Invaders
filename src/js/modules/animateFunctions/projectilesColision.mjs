import { invaderProjectiles } from "../../index.js";
import { projectiles } from "../classModels/Projectile.mjs";
import { createParticles } from "./createParticles.mjs";
import { audioOnHitInvaderProjectile } from "../audio.mjs";


export { projectilesColision };

function projectilesColision(){
    invaderProjectiles.forEach((invaderProjectile, i) => {
        
        projectiles.forEach((projectile, j) => {
        if (
            projectile.position.y - projectile.radius <=
            invaderProjectile.position.y + invaderProjectile.height &&
            projectile.position.x + projectile.radius >= invaderProjectile.position.x &&
            projectile.position.y + projectile.radius >= invaderProjectile.position.y &&
            projectile.position.x <= invaderProjectile.position.x + invaderProjectile.width * 2 &&
            projectile.position.x >= invaderProjectile.position.x - invaderProjectile.width * 2 
        ) 
        {
            setTimeout( () =>
            {
                const invaderProjectileFound = invaderProjectiles.find(
                ( invaderProjectile2 ) => invaderProjectile2 === invaderProjectile
                );
    
                const projectileFound = projectiles.find(
                ( projectile2 ) => projectile2 === projectile
                );
                    //remove invaderProjectile and projectile
                if ( invaderProjectileFound && projectileFound )
                {
                createParticles( {
                    object: invaderProjectile,
                    fades: true,
                    color: 'white'
                    } );
                audioOnHitInvaderProjectile()
                invaderProjectiles.splice( i, 1 );
                projectiles.splice( j, 1 );
                }
            }, 0 );
        }
        });
    } )
}