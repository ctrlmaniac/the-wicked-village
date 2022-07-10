import { println } from "../utils";
import Scene from "./Scene";

export default class Road1A extends Scene {
  blueprint(): void {
    println([
      "- In front on you the road continues.",
      "- On your right there's a house",
      "- On your back there's the village main gate.",
      "- On your left there's another house.",
    ]);

    this.move();
  }

  welcome(): void {
    println(["You're on the main road."]);

    this.blueprint();
  }

  right(): void {
    this.game.scenes.House2.welcome();
  }

  back(): void {
    if (this.game.scenes.MainGate.doorLocked) {
      println([
        "The gate has been closed!",
        "You can't escape the village!",
        "You need a key to exit...",
      ]);
      this.move();
    } else {
      this.game.scenes.MainGate.welcome();
    }
  }

  left(): void {
    this.game.scenes.House1.welcome();
  }
}
