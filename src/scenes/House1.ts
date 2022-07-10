import { println } from "../utils";
import Scene from "./Scene";

export default class House1 extends Scene {
  doorLoked: boolean = true;

  blueprint(): void {
    println([
      "- In front of you there's a closed door.",
      "- On your right there's a window",
      "- On your back there's the main road.",
      "- On your left there's a bench.",
    ]);

    this.move();
  }

  welcome(): void {
    println([
      "You're in front of a house.",
      "The house is old and in bad conditions.",
      "You need to find your daugther, maybe the owner knows something...",
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
          this.welcome();
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
            setTimeout(() => {
              this.welcome();
            }, 2000);
            break;
        }
      };
    }, 4000);
  }

  openTheDoor(): void {
    if (this.doorLoked) {
      println([
        "You try to open the door but it is closed from the other side.",
        "You go back...",
      ]);

      setTimeout(() => {
        this.welcome();
      }, 4000);
    }
  }

  right(): void {
    println([
      "There's a window.",
      "You try to see if there's someone inside, but it seems that noone is there.",
      "You go back...",
    ]);

    setTimeout(() => {
      this.welcome();
    }, 2000);
  }

  back(): void {
    this.game.scenes.Road1A.welcome();
  }

  left(): void {
    println([
      "There's an old bench here but nothing useful.",
      "You go back...",
    ]);

    setTimeout(() => {
      this.welcome();
    }, 2000);
  }
}
