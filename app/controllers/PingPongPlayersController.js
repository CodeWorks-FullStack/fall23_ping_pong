import { AppState } from "../AppState.js";
import { pingPongPlayersService } from "../services/PingPongPlayersService.js";

function _doThing() {
  console.log('do thing');
}

export class PingPongPlayersController {
  constructor () {
    console.log('Ping Pong Player Controller is loaded');
    console.log('Looking at players in the AppState', AppState.pingPongPlayers);
    // _doThing()
  }

  //NOTE this is the right place to write methods accessible in the view 
  // rightPlace() {

  // }


  buttonClicked() {
    console.log('You clicked the button');
  }

  increasePlayerScore() {
    console.log('You clicked the increase score button');
    pingPongPlayersService.increasePlayerScore()
  }

}

//NOTE this is the wrong place to write methods accessible in the view
// wrongPlace(){

// }