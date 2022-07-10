import { println } from "../utils";
import Scene from "./Scene";

export default class Road1C extends Scene {
  welcome(): void {
    println(["You're on the main road."]);
    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you the road continues.", // Road 1D
      "- On your right there's an allay.",
      "- On your back the road takes to the main gate.", // Road 1B
      "- On your left there's another road.",
    ]);
    this.move();
  }

  front(): void {
    this.game.scenes.Road1D.welcome();
  }

  back(): void {
    this.game.scenes.Road1B.welcome();
  }
}
