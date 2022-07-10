import { println } from "../utils";
import Scene from "./Scene";

export default class House2Hall extends Scene {
  blueprint(): void {
    println([
      "- In front of you there's the hallway.",
      "- On your right there's a closed door.",
      "- On your back there's the main door to the road.",
      "- On your left there's the living room.",
    ]);
  }

  welcome(): void {
    println([
      "The house is neglected.",
      "It seems that noone has lived in this house for a long time.",
    ]);
  }

  front(): void {
    // hallway
  }

  right(): void {
    println(["There's a closed door. Do you want to try open it?"]);
    // diningroom
  }

  back(): void {
    println(["You exit the house."]);
    this.game.scenes.House2.welcome();
  }

  left(): void {
    // livingroom
  }
}
