import { println } from "../utils";
import Scene from "./Scene";

export default class Road1B extends Scene {
  welcome(): void {
    println(["You're on the main road."]);
    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you the road continues.", // Road 1C
      "- On your right there's a house.", // House 4
      "- On your back the road takes to the main gate.", // Road 1A
      "- On your left there's another house.", // House 3
    ]);
    this.move();
  }

  front(): void {
    this.game.scenes.Road1C.welcome();
  }

  back(): void {
    this.game.scenes.Road1A.welcome();
  }

  right(): void {
    this.game.scenes.House4.welcome();
  }

  left(): void {
    this.game.scenes.House3.welcome();
  }
}
