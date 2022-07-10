import { House1, MainGate, Road1A } from "./scenes";

export default class Game {
  scenes = {
    MainGate: new MainGate(this),
    Road1A: new Road1A(this),
    House1: new House1(this),
  };

  play() {
    this.scenes.MainGate.welcome();
  }
}
