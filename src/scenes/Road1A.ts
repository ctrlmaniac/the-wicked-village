import { println } from "../utils";
import Scene from "./Scene";

export default class Road1A extends Scene {
  blueprint(): void {
    println([
      "- In front of you the road continues.", // Road 1B
      "- On your right there's a house", // House 2
      "- On your back there's the village main gate.", // MainGate
      "- On your left there's another house.", // House 1
    ]);

    this.move();
  }

  welcome(): void {
    println(["You're on the main road."]);
    this.blueprint();
  }

  front(): void {
    this.game.scenes.Road1B.welcome();
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
