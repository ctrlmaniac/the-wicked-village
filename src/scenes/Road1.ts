import { println } from "../utils";
import Scene from "./Scene";

export default class Road1 extends Scene {
  blueprint(): void {
    println([
      "In front on you the road continues.",
      "On your right there's a house",
      "On your back there's the village main gate.",
      "On your left there's another house.",
    ]);

    this.move();
  }

  welcome(): void {
    println(["You're on the main road."]);

    this.blueprint();
  }

  back(): void {
    this.game.scenes.maingate.welcome();
  }
}
