import { println } from "../utils";
import Scene from "./Scene";

export default class House2Livingroom extends Scene {
  blueprint(): void {
    println([
      "- In front of you there's a couch.",
      "- On your left there are some paintings",
      "- On your back there's the door to the hall",
      "- On your left there's a shelf",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "The livingroom is a total mess.",
      "You try to walk but the furniture obstructs the way.",
    ]);
    this.blueprint();
  }
}
