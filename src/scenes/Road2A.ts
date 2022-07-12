import { println } from "../utils";
import Scene from "./Scene";

export default class Road2A extends Scene {
  welcome(): void {
    println([
      "It's an impasse!",
      "A big truck blocks the way out.",
      "You go back...",
    ]);

    this.game.scenes.Road1C.move();
  }
}
