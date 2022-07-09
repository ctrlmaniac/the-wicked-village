import { MainGate, Road1 } from "./scenes";

export default class Game {
  scenes = {
    maingate: new MainGate(this),
    road1: new Road1(this),
  };

  play() {
    this.scenes.maingate.welcome();
  }
}
