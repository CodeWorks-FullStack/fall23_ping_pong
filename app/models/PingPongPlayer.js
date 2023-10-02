
export class PingPongPlayer {
  // NOTE you can set up an unlimited number of parameters in any function
  // constructor (name, imgUrl, something, somethingElse, andEvenMoreStuff) {

  // NOTE when this class is instantiated, we pass through a name and imgUrl as arguments
  constructor (name, imgUrl) {
    // NOTE "this" refers to a property on inside the class itself. These will be assigned when the constructor runs 
    this.name = name
    this.imgUrl = imgUrl

    // NOTE we can set up default values in the constructor as well
    this.score = 0
  }

  // NOTE a getter must return a value, and it will act like your are accessing a property when this method is called. This getter will get the up-to-date values stored in this class model and inject them into the HTML
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
            <button onclick="app.PingPongPlayersController.decreasePlayerScore('${this.name}')" class="btn btn-danger" type="button">-</button>
            <button onclick="app.PingPongPlayersController.increasePlayerScore('${this.name}')" class="btn btn-success" type="button">+</button>
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
//   func: () => { console.log(this.name) }
// }