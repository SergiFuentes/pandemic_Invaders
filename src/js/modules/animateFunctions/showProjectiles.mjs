import { projectiles } from "../../index.js"

export { showProjectiles };

function showProjectiles(){
projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.height <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0);
        } else {
            projectile.update();
        }
    } )
}