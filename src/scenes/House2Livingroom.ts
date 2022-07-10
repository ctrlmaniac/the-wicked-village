import { Items } from "../items";
import { println } from "../utils";
import Scene from "./Scene";

export default class House2Livingroom extends Scene {
  blueprint(): void {
    println([
      "- In front of you there's a couch.",
      "- On your left there are some pictures.",
      "- On your back there's the door to the hall.",
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

  front(): void {
    println([
      "The couch is dusty and full of leaves, sheets and all sorts of dirty stuff.",
    ]);

    if (!this.game.player.checkItem(Items.House2Passepartout)) {
      println([
        "You see there's something that shimmer under the light of the sun.",
        "There's a key!",
      ]);

      this.game.player.pickAnItem(Items.House2Passepartout);
    }

    println(["You go back..."]);

    this.move();
  }

  back(): void {
    this.game.scenes.House2Hall.blueprint();
  }

  left(): void {
    println([
      "There are some pictures, maybe they portait the family that used to live here!",
      "There's nothing more here.",
      "You go back...",
    ]);

    this.move();
  }
}
