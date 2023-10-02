import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PingPongPlayersController } from "./controllers/PingPongPlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    // NOTE the path property is looking at the url, and runs the code inside the object when the url matches the path
    path: '',
    // NOTE the controller to load when the url path matches in our browser (on page load)
    // controller: HomeController,
    controller: PingPongPlayersController,
    // NOTE adding null here will make it so that the router does not inject any HTML on page load
    // TODO put null here today! We'll get back to this
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]