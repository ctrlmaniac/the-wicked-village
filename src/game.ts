import {
  House1,
  House2,
  House2Hall,
  House2Livingroom,
  MainGate,
  Road1A,
} from "./scenes";

export default class Game {
  scenes = {
    MainGate: new MainGate(this),
    Road1A: new Road1A(this),
    House1: new House1(this),
    House2: new House2(this),
    House2Hall: new House2Hall(this),
    House2Livingroom: new House2Livingroom(this),
  };

  play() {
    this.scenes.MainGate.welcome();
  }
}
