import { println } from "../utils";
import Scene from "./Scene";

export default class House1 extends Scene {
  blueprint(): void {
    println([
      "In front of you there's a closed door.",
      "On your right there's a window",
      "On your back there's the main road.",
      "On your left there's a bench.",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "You're in front of a house.",
      "The house is old and in bad conditions.",
      "You need to find your daugther, maybe the owner knows something...",
    ]);

    this.blueprint();
  }

  back(): void {
    this.game.scenes.Road1.welcome();
  }
}
