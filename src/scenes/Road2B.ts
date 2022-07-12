import { println } from "../utils";
import Scene from "./Scene";

export default class Road2B extends Scene {
  welcome(): void {
    println(["You're on a second road."]);

    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you the road continues.",
      "- On your back the road continues.", // Road 1C
    ]);

    this.move();
  }

  back(): void {
    this.game.scenes.Road1C.welcome();
  }
}
