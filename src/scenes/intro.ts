import Game from "../game";
import { println } from "../utils";
import Scene from "./scene";

export default class Intro extends Scene {
  welcome() {
    println([
      "Your in front of a gate.",
      "The gate opens to a foreing village.",
    ]);

    this.move();
  }

  front() {
    println(["You enter the village"]);
    this.game.scenes.road1.welcome();
  }
}
