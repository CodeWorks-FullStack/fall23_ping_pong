
export class PingPongPlayer {
  // constructor (name, imgUrl, something, somethingElse, andEvenMoreStuff) {
  // name;
  constructor (name, imgUrl) {
    this.name = name
    this.imgUrl = imgUrl
    this.score = 0
  }

  get PlayerCard() {
    return /*html*/`
    <div class="col-12 col-md-4">
      <div class="bg-secondary">
        <img
          src="${this.imgUrl}"
          alt="${this.name}" class="img-fluid player-img">
        <div class="p-3">
          <p class="fs-2">${this.name}</p>
          <p class="fs-3">Score: ${this.score}</p>
          <div>
            <button onclick="app.PingPongPlayersController.decreasePlayerScore('${this.name}')" class="btn btn-danger">-</button>
            <button onclick="app.PingPongPlayersController.increasePlayerScore('${this.name}')" class="btn btn-success">+</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

// const miles = new PingPongPlayer('Miles', 'https://plus.unsplash.com/premium_photo-1673829957242-867871e2ddd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')

// console.log(miles.name); // 'Miles'
// console.log(miles.score); // 0
// const guy = {
//   name: 'Guy',
//   lastName: 'Dude',
//   func: () => { this.name }
// }