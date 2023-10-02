import { AppState } from "../AppState.js";
import { pingPongPlayersService } from "../services/PingPongPlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _doThing() {
  console.log('do thing');
}

function _drawPingPongPlayers() {
  const pingPongPlayers = AppState.pingPongPlayers
  let content = ''
  pingPongPlayers.forEach(player => content += player.PlayerCard)
  // console.log('here is the content', content);

  // let element = document.getElementById('pingPongPlayers')
  // element.innerHTML = content
  setHTML('pingPongPlayers', content)
}

export class PingPongPlayersController {
  constructor () {
    console.log('Ping Pong Player Controller is loaded');
    console.log('Looking at players in the AppState', AppState.pingPongPlayers);
    // _doThing()
    _drawPingPongPlayers()
  }

  //NOTE this is the right place to write methods accessible in the view 
  // rightPlace() {

  // }


  buttonClicked() {
    console.log('You clicked the button');
  }

  increasePlayerScore(pingPongPlayerName) {
    console.log('You clicked the increase score button', pingPongPlayerName);
    pingPongPlayersService.increasePlayerScore(pingPongPlayerName)
    _drawPingPongPlayers()
  }

  decreasePlayerScore(pingPongPlayerName) {
    pingPongPlayersService.decreasePlayerScore(pingPongPlayerName)
    _drawPingPongPlayers()
  }

  createPingPongPlayer(event) {
    // NOTE stop the page from refreshing
    event.preventDefault()
    console.log('form submitted', event);

    const form = event.target

    const pingPongPlayerData = getFormData(form)

    console.log(pingPongPlayerData);

    pingPongPlayersService.createPingPongPlayer(pingPongPlayerData)

    _drawPingPongPlayers()
  }

}

//NOTE this is the wrong place to write methods accessible in the view
// wrongPlace(){

// }