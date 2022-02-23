import { player } from "../../index.js";

export { showShips };
    


function showShips ()
{
  const shipIcon = '<img src="assets/img/supaSpaceIcon.png">';
  const playerShips = document.querySelector( "#playerShips" );
  let ships = [];
    
  playerShips.innerHTML = ''

  for ( let i = player.lives; i > 0; i-- )
  {
    ships.push( shipIcon )
    playerShips.innerHTML += shipIcon 
  }
}