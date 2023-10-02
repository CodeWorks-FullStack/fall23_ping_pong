import { AppState } from "../AppState.js";

class PingPongPlayersService {
  increasePlayerScore() {
    console.log("you clicked the button, but you're in the service now");
    const foundPlayer = AppState.pingPongPlayers.find(player => player.name == 'Savannah')
    foundPlayer.score++
    console.log('found player', foundPlayer);
  }
}

export const pingPongPlayersService = new PingPongPlayersService()