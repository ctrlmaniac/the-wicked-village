import { println } from "../utils";
import Scene from "./Scene";

export default class House1 extends Scene {
  doorLocked: boolean = true;

  blueprint(): void {
    println([
      "- In front of you there's a closed door.",
      "- On your right there's a window",
      "- On your back there's the main road.", // Road 1A
      "- On your left there's a bench.",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "You're in front of a house at the 1 street number.",
      "The house is old and in bad conditions.",
      "You need to find your daugther, maybe the owner knows something...",
    ]);

    this.blueprint();
  }

  front(): void {
    let fired = false;

    println(["The door is closed.", "Do you want to knock on the door?"]);

    document.onkeydown = (ev) => {
      if (!fired) {
        fired = true;

        switch (ev.key) {
          case "Enter":
          case "Y":
          case "y":
            this.knockOnDoor();
            break;

          default:
            println(["You go back..."]);
            this.move();
            break;
        }
      }
    };
  }

  knockOnDoor(): void {
    let fired = false;

    println(["You knock on the door..."]);

    setTimeout(() => {
      println([
        "It seems that noone is in the house.",
        "Do you want to try to open the door?",
      ]);

      document.onkeydown = (ev) => {
        if (!fired) {
          switch (ev.key) {
            case "Enter":
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

      this.move();
    }
  }

  right(): void {
    println([
      "There's a window.",
      "You try to see if there's someone inside, but it seems that noone is there.",
      "You go back...",
    ]);

    this.move();
  }

  back(): void {
    this.game.scenes.Road1A.welcome();
  }

  left(): void {
    println([
      "There's an old bench here but nothing useful.",
      "You go back...",
    ]);

    this.move();
  }
}
