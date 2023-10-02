import { AppState } from "../AppState.js";
import { PingPongPlayer } from "../models/PingPongPlayer.js";

class PingPongPlayersService {
  createPingPongPlayer(pingPongPlayerData) {
    const newPingPongPlayer = new PingPongPlayer(pingPongPlayerData.name, pingPongPlayerData.imgUrl)
    console.log('here is your fancy class model', newPingPongPlayer);

    AppState.pingPongPlayers.push(newPingPongPlayer)
  }
  decreasePlayerScore(pingPongPlayerName) {
    const foundPlayer = AppState.pingPongPlayers.find(player => player.name == pingPongPlayerName)
    foundPlayer.score--
    console.log(foundPlayer);
  }
  increasePlayerScore(pingPongPlayerName) {
    console.log("you clicked the button, but you're in the service now", pingPongPlayerName);
    // const foundPlayer = AppState.pingPongPlayers.find(player => player.name == 'Savannah')
    const foundPlayer = AppState.pingPongPlayers.find(player => player.name == pingPongPlayerName)
    foundPlayer.score++
    console.log('found player', foundPlayer);
  }
}

export const pingPongPlayersService = new PingPongPlayersService()