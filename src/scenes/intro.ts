import Game from "../game";
import { println } from "../utils";
import Scene from "./scene";

export default class Intro extends Scene {
  blueprint(): void {
    println(["In front of you there's a gate."]);

    this.move();
  }

  welcome(): void {
    println(["You're just outside of the village."]);
    this.blueprint();
  }

  front(): void {
    println(["You enter the village."]);
    this.game.scenes.road1.welcome();
  }

  right(): void {
    println(["You can't go right, try again!"]);
    this.move();
  }

  back(): void {
    println([
      "After all you have done to come here, You can't just go back.",
      "Take courage and go into the village!",
    ]);
    this.move();
  }

  left(): void {
    println(["You can't go left, try again!"]);
    this.move();
  }
}
