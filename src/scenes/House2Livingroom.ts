import { Items } from "../items";
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

  front(): void {
    println([
      "The couch is dusty and full of papers, sheets and all sorts of stuff.",
    ]);

    if (!this.game.player.checkItem(Items.House2Passepartout)) {
      println([
        "You see there's something that shimmer under the light of the sun.",
        "There's a key!",
      ]);

      this.game.player.pickAnItem(Items.House2Passepartout);
    }

    println(["You go back..."]);

    setTimeout(() => {
      this.blueprint();
    }, 2000);
  }

  back(): void {
    this.game.scenes.House2Hall.welcome();
  }
}
