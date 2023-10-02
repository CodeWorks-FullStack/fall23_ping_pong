import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor () {
    console.log('This is the Home Controller')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}

// NOTE in order to access this class object, I have to build one using the 'new' keyword
// HomeController // this is a definition of the class
// const builtHomeController = new HomeController() // this is the actual built class object
// const builtHomeController2 = new HomeController() // you can build multiple instances of the same class

// REVIEW defining the function
// function someThing() {
//   console.log('something');
// }

// function definition
// someThing

// function invocation
// someThing()

// builtHomeController.testButton() // the methods and properties on this class are only available after you build one