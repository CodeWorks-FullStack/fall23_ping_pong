import { AppState } from "../AppState.js";
import { pingPongPlayersService } from "../services/PingPongPlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

// NOTE "_" is a convention to denote a private piece of code. If this is not declared on our exported class, the view can not call it directly
function _doThing() {
  console.log('do thing');
}

function _drawPingPongPlayers() {
  // NOTE bring in arrary from AppState
  const pingPongPlayers = AppState.pingPongPlayers
  // NOTE set up placeholder to store HTML
  let content = ''
  // NOTE player.PlayerCard runs the get PlayerCard method declared in the class, which returns the HTML that is stored on each Class Model
  pingPongPlayers.forEach(player => content += player.PlayerCard)
  // console.log('here is the content', content);

  // NOTE setHTML does the below lines of code and has better error handling, thanks Jake
  // let element = document.getElementById('pingPongPlayers')
  // element.innerHTML = content
  setHTML('pingPongPlayers', content)
}

// NOTE anything declared inside of our Controller class will be accessible to view (index.html)
export class PingPongPlayersController {
  // NOTE constructor runs when our class is built. Controllers will be built on page load (if they are registered in the router), so placing code inside here essentially will run it on page load
  constructor () {
    console.log('Ping Pong Player Controller is loaded');
    console.log('Looking at players in the AppState', AppState.pingPongPlayers);
    // _doThing()
    // NOTE 
    _drawPingPongPlayers()
  }

  //NOTE this is the right place to write methods accessible in the view 
  // rightPlace() {

  // }


  // NOTE functions created on an object are called methods
  buttonClicked() {
    console.log('You clicked the button');
  }

  // NOTE an argument is passed from the HTML stored on the PingPongPlayer class
  increasePlayerScore(pingPongPlayerName) {
    console.log('You clicked the increase score button', pingPongPlayerName);

    // NOTE the controller can call methods declared in the service, and can also pass down data
    pingPongPlayersService.increasePlayerScore(pingPongPlayerName)

    // NOTE calls private draw function
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

    // NOTE pulls out the HTML form that was just submitted
    const form = event.target

    // NOTE pulls all of the values out of an input tag with a name and stores those values in an object 
    const pingPongPlayerData = getFormData(form)

    console.log(pingPongPlayerData);

    pingPongPlayersService.createPingPongPlayer(pingPongPlayerData)

    _drawPingPongPlayers()
  }

}

//NOTE this is the wrong place to write methods accessible in the view
// wrongPlace(){

// }