import { println } from "../utils";
import Scene from "./Scene";

export default class Road1B extends Scene {
  welcome(): void {
    println(["You're on the main road."]);
    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you there's a house.",
      "- On your right there's another house.",
      "- On your back the road takes to the main gate.",
      "- On your left there's yet another house.",
    ]);
    this.move();
  }

  back(): void {
    this.game.scenes.Road1C.welcome();
  }
}
