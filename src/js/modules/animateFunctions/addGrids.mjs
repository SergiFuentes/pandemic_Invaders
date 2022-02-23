
import { grids } from "../../index.js";
import { Grid } from "../classModels/Grid.mjs";

export { addGrids };
export { frames };


let frames = 0;
let randomInterval = Math.floor( Math.random() * 500 + 500 );

function addGrids(){
  if (frames % randomInterval === 0) {
    grids.push(new Grid());
    randomInterval = Math.floor(Math.random() * 500 +500 );
    frames = 0;
    }
    frames++
}