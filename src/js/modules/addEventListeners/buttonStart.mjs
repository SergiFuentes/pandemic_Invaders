import { game } from "../../index.js";
import { animate } from "../../index.js";
import { audioOnPlay } from "../audio.mjs";

export { start };

const buttonStart = document.querySelector( "#buttonStart" );
const gameInit = document.querySelector( "#gameInit" );



function start ()
{
    setTimeout( () =>
    {
        game.active = false;
        gameInit.innerHTML = 'Supa-Space <br>PandemiC <br>inVAderS';
    }, 0 );
    
    setTimeout( () =>
    {
    buttonStart.innerHTML = 'START'
    }, 2000 );

    buttonStart.addEventListener( 'click', function startGame ()
    {
        buttonStart.innerHTML = '';
        gameInit.innerHTML = '';
        game.active = true;
        audioOnPlay()
        
        animate()

    }, false )

    buttonStart.addEventListener(
        "mouseover",
        function () {
          this.style.color = "red";
        },
        false
      );
      
      buttonStart.addEventListener(
        "mouseout",
        function () {
          this.style.color = "yellow";
        },
        false
    );
    

}
