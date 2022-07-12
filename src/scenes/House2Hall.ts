import { Items } from "../items";
import { println } from "../utils";
import Scene from "./Scene";

export default class House2Hall extends Scene {
  blueprint(): void {
    println([
      "- In front of you there's the hallway.",
      "- On your right there's a closed door.",
      "- On your back there's the main door to the road.",
      "- On your left there's the livingroom.",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "You're in the hall.",
      "The house is neglected.",
      "It seems that noone has lived in this house for a long time.",
    ]);

    this.blueprint();
  }

  front(): void {
    println([
      "The hallway is blocked by some old forniture.",
      "You can't go forward!",
      "You go back...",
    ]);
    this.move();
  }

  right(): void {
    let fired = false;

    println(["There's a closed door. Do you want to try open it?"]);

    document.onkeydown = (ev) => {
      if (!fired) {
        fired = true;

        switch (ev.key) {
          case "Enter":
          case "Y":
          case "y":
            this.openTheDoor();
            break;

          default:
            println(["You go back..."]);
            this.move();
            break;
        }
      }
    };
  }

  openTheDoor() {
    if (
      this.game.player.checkItem(Items.House2Passepartout) ||
      !this.game.scenes.House2Diningroom.doorLocked
    ) {
      println(["You unlock the door and enter the room."]);
      this.game.scenes.House2Diningroom.doorLocked = false;
      this.game.scenes.House2Diningroom.welcome();
    } else {
      println([
        "The door is locked. You need a key to enter the room.",
        "You go back...",
      ]);

      this.move();
    }
  }

  back(): void {
    println(["You exit the house."]);
    this.game.scenes.House2.welcome();
  }

  left(): void {
    this.game.scenes.House2Livingroom.welcome();
  }
}
