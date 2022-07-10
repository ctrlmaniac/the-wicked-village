import { Items } from "../items";
import { println } from "../utils";
import Scene from "./Scene";

export default class House2Diningroom extends Scene {
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
    println(["- In front of you there's a table."]);
    this.move();
  }

  front(): void {
    println([
      "The smell is very bed!",
      "The food is left to rot!",
      "Maybe you can take a knife from the dishes, it will be useful in the future!",
      "Do you want to take the knife?",
    ]);

    document.onkeydown = (ev) => {
      let key = ev.key;

      switch (key) {
        case "Y":
        case "y":
          this.game.player.pickAnItem(Items.KitchenKnife);
          break;

        default:
          break;
      }

      println(["You go back..."]);
      this.move();
    };
  }
}
