import { House1, MainGate, Road1 } from "./scenes";

export default class Game {
  scenes = {
    MainGate: new MainGate(this),
    Road1: new Road1(this),
    House1: new House1(this),
  };

  play() {
    this.scenes.MainGate.welcome();
  }
}
