import { game } from "../../index.js";
import { animate } from "../../index.js";

export { playPauseGame};

let playPause = document.createElement( "p" );
playPauseButton.appendChild( playPause );
    
window.addEventListener("load",function(){
    document.getElementById( "playPauseButton" ).addEventListener( "click", playPauseGame );
    playPause.innerHTML = 'pause';
} );  
    
function playPauseGame ()
{
  if (!game.over){
    playPause.innerHTML === 'play' ? playPause.innerHTML = 'pause' : playPause.innerHTML = 'play'
        
    playPause.innerHTML === 'pause' ? game.active = true : game.active = false
    playPause.innerHTML === 'play' ? game.active = false : game.active = true
    animate()
  }
}