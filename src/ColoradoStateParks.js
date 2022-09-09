import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife } from "./parks/RockyMountain";
// import {trees as parkTrees, wildlife as parkWildlife,} from "./parks/RockyMountain";

import * as RMFunctions from "./parks/RockyMountain"

console.log(RMFunctions.trees);

RMFunctions.wildlife();

RMFunctions.elevation();

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
  <div>
    <h1>Colorado State Parks!</h1>
    <MesaVerde/>
  </div>
  );
}

console.log(trees);

wildlife();

export default ColoradoStateParks;