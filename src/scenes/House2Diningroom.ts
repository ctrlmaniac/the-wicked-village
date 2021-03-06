import { Items } from "../items";
import { println } from "../utils";
import Scene from "./Scene";

export default class House2Diningroom extends Scene {
  doorLocked = true;

  welcome(): void {
    println([
      "You're in the dining room.",
      "The smell is so bad!",
      "It looks like the family that used to live here left the food on their plates.",
      "You basically can't move anywhere!",
    ]);

    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you there's a table.",
      "- On your back there's the door to the hallway.",
    ]);
    this.move();
  }

  front(): void {
    let fired = false;

    println([
      "The smell is very bed!",
      "The food is left to rot!",
      "Maybe you can take a knife from the dishes, it will be useful in the future!",
      "Do you want to take the knife?",
    ]);

    document.onkeydown = (ev) => {
      if (!fired) {
        fired = true;

        switch (ev.key) {
          case "Enter":
          case "Y":
          case "y":
            this.game.player.pickAnItem(Items.KitchenKnife);
            break;

          default:
            break;
        }
      }

      println(["You go back..."]);
      this.move();
    };
  }

  back(): void {
    this.game.scenes.House2Hall.welcome();
  }
}
