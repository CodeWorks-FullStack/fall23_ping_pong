import { AppState } from "../AppState.js";
import { PingPongPlayer } from "../models/PingPongPlayer.js";

// NOTE do not export our Service Classes
class PingPongPlayersService {
  createPingPongPlayer(pingPongPlayerData) {
    // Instantiates a new PingPongPlayer using the data from the HTML form
    const newPingPongPlayer = new PingPongPlayer(pingPongPlayerData.name, pingPongPlayerData.imgUrl)

    console.log('here is your fancy class model', newPingPongPlayer);

    // NOTE adds the Class Model to the end of our pingPongPlayers array
    AppState.pingPongPlayers.push(newPingPongPlayer)

    // AppState.pingPongPlayers.unshift(newPingPongPlayer)

  }
  decreasePlayerScore(pingPongPlayerName) {
    const foundPlayer = AppState.pingPongPlayers.find(player => player.name == pingPongPlayerName)
    foundPlayer.score--
    console.log(foundPlayer);
  }
  increasePlayerScore(pingPongPlayerName) {
    console.log("you clicked the button, but you're in the service now", pingPongPlayerName);
    // const foundPlayer = AppState.pingPongPlayers.find(player => player.name == 'Savannah')

    // NOTE AppState is our class object that stores our global variables, pingPlayers is an array on that object
    const foundPlayer = AppState.pingPongPlayers.find(player => player.name == pingPongPlayerName)
    foundPlayer.score++
    console.log('found player', foundPlayer);
  }
}

// NOTE we create a single instance of our service class, and export that to other modules. 
// REVIEW Singleton
export const pingPongPlayersService = new PingPongPlayersService()