import { Items } from "../items";
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

    this.move();
  }

  welcome(): void {
    println([
      "The house is neglected.",
      "It seems that noone has lived in this house for a long time.",
    ]);

    this.blueprint();
  }

  front(): void {
    // hallway
  }

  right(): void {
    println(["There's a closed door. Do you want to try open it?"]);

    document.onkeydown = (ev) => {
      let key = ev.key;

      switch (key) {
        case "Y":
        case "y":
          this.openTheDoor();
          break;

        default:
          println(["You go back..."]);
          setTimeout(() => {
            this.move();
          }, 2000);
          break;
      }
    };
  }

  openTheDoor() {
    if (this.game.player.checkItem(Items.House2Passepartout)) {
      println(["You unlock the door and enter the room"]);
      // livingroom
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
