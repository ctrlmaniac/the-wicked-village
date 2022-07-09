import { Intro, Road1 } from "./scenes";

export default class Game {
  scenes = {
    intro: new Intro(this),
    road1: new Road1(this),
  };

  play() {
    this.scenes.intro.welcome();
  }
}
