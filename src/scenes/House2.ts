import { println } from "../utils";
import Scene from "./Scene";

export default class House2 extends Scene {
  doorLocked: boolean = false;

  blueprint(): void {
    println([
      "- In front of you there's a closed door.",
      "- On your right there's a window",
      "- On your back there's the main road.",
      "- On your left there's another window.",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "The house it at the second street number.",
      "It's is very old.",
      "The garden is overgrown and deserted.",
      "It seems that noone has lived in this house for a long time.",
    ]);

    this.blueprint();
  }

  front(): void {
    println(["The door is closed.", "Do you want to knock on the door?"]);

    document.onkeydown = (ev) => {
      let key = ev.key;

      switch (key) {
        case "Y":
        case "y":
          this.knockOnDoor();
          break;

        default:
          println(["You go back..."]);
          this.move();
          break;
      }
    };
  }

  knockOnDoor(): void {
    println(["You knock on the door..."]);

    setTimeout(() => {
      println([
        "It seems that noone is in the house.",
        "Do you want to try to open the door?",
      ]);

      document.onkeydown = (ev) => {
        let key = ev.key;

        switch (key) {
          case "Y":
          case "y":
            this.openTheDoor();
            break;

          default:
            println(["You go back..."]);
            this.move();
            break;
        }
      };
    }, 4000);
  }

  openTheDoor(): void {
    if (this.doorLocked) {
      println([
        "You try to open the door but it is closed from the other side.",
        "You go back...",
      ]);

      setTimeout(() => {
        this.welcome();
      }, 4000);
    } else {
      println(["The door is opened and you enter the house..."]);

      setTimeout(() => {
        this.game.scenes.House2Hall.welcome();
      }, 2000);
    }
  }

  right(): void {
    println([
      "The window is broken. You try to see through.",
      "The house seems abandonded, the fornitures are not in their place.",
      "You see a couch and something shimmers on it.",
      "You go back...",
    ]);
    this.move();
  }

  back(): void {
    this.game.scenes.Road1A.welcome();
  }

  left(): void {
    println([
      "The window is really dirty and dusty.",
      "You try to see through but you can't see anything.",
      "You go back...",
    ]);

    this.move();
  }
}
