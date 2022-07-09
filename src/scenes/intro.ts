import Game from "../game";
import { println } from "../utils";
import Scene from "./scene";

export default class Intro extends Scene {
  blueprint(): void {
    println(["In front of you ther's a gate."]);

    this.move();
  }

  welcome(): void {
    println(["You're just outside of the village."]);

    this.blueprint();
  }

  front(): void {
    println(["You enter the village"]);
    this.game.scenes.road1.welcome();
  }
}
