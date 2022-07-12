import { println } from "../utils";
import Scene from "./Scene";

export default class House3 extends Scene {
  tries: number = 0;

  welcome(): void {
    println(["You're in front of a house at the 3 street number."]);

    this.blueprint();
  }

  blueprint(): void {
    println([
      "- In front of you there's a closed door.",
      "- On your right there's a window",
      "- On your back there's the main road.", // Road 1B
      "- On your left there's another window.",
    ]);

    this.move();
  }

  back(): void {
    this.game.scenes.Road1A.welcome();
  }

  right(): void {
    println([
      "There's a window. You see through it.",
      "Somebody is in there!",
      "You have to ask for help!",
      "You go back...",
    ]);

    this.move();
  }

  left(): void {
    println([
      "The window overlooks the livingroom of the house.",
      "It seems that noone is there.",
      "You go back...",
    ]);

    this.move();
  }

  front(): void {
    let fired = false;

    println([
      "You're in front of the door.",
      "Do you want to knock on the door?",
    ]);

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

  knockOnDoor() {
    println(["You knock on the door..."]);

    this.conversation();
  }

  conversation() {
    if (this.tries === 0) {
      let fired = false;
      this.tries++;

      println([
        "Unknown: Who's there?",
        "You reply by telling your name and that you need some help.",
        "Unknown: Go away! I can't help you!",
      ]);

      println(["Do you want to try again?"]);

      document.onkeydown = (ev) => {
        if (!fired) {
          fired = true;

          switch (ev.key) {
            case "Enter":
            case "Y":
            case "y":
              this.conversation();
              break;

            default:
              println(["You go back..."]);
              this.move();
              break;
          }
        }
      };
    } else if (this.tries === 1) {
      let fired = false;
      this.tries++;

      println(["Unknown: I said I can't help you! Please, go away!"]);

      println(["Do you want to try again?"]);

      document.onkeydown = (ev) => {
        if (!fired) {
          fired = true;

          switch (ev.key) {
            case "Enter":
            case "Y":
            case "y":
              this.conversation();
              break;

            default:
              println(["You go back..."]);
              this.move();
              break;
          }
        }
      };
    } else if (this.tries === 2) {
      let fired = false;
      this.tries++;

      println([
        "Unknown: If you need help, go seek it at the Mansion!",
        "Unknown: The mansion is the only big house in this god-forsaken village!",
        "Unknown: Go to the mansion!",
      ]);

      println(["Do you want to try again?"]);

      document.onkeydown = (ev) => {
        if (!fired) {
          fired = true;

          switch (ev.key) {
            case "Enter":
            case "Y":
            case "y":
              this.conversation();
              break;

            default:
              println(["You go back..."]);
              this.move();
              break;
          }
        }
      };
    } else {
      let fired = false;

      println(["Unknown: Go to the Mansion! That's all! Go away now!"]);

      println(["Do you want to try again?"]);

      document.onkeydown = (ev) => {
        if (!fired) {
          fired = true;

          switch (ev.key) {
            case "Enter":
            case "Y":
            case "y":
              this.conversation();
              break;

            default:
              println(["You go back..."]);
              this.move();
              break;
          }
        }
      };
    }
  }
}
