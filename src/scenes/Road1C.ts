import { println } from "../utils";
import Scene from "./Scene";

export default class Road1C extends Scene {
  welcome(): void {
    println(["You're on the main road."]);
    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you the road continues.",
      "- On your right there's an allay.",
      "- On your back the road takes to the main gate.",
      "- On your left there's another road.",
    ]);
    this.move();
  }

  back(): void {
    this.game.scenes.Road1B.welcome();
  }
}
