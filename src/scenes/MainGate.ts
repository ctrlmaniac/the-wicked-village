import Game from "../game";
import { println } from "../utils";
import Scene from "./Scene";

export default class MainGate extends Scene {
  doorLocked: boolean = false;

  constructor(game: Game) {
    super(game);
    this.game = game;

    setTimeout(() => {
      this.doorLocked = true;
    }, 60000);
  }

  blueprint(): void {
    println(["- In front of you there's a gate."]); // Road 1A

    this.move();
  }

  welcome(): void {
    println(["You're just outside of the village."]);
    this.blueprint();
  }

  front(): void {
    if (this.doorLocked) {
      println([
        "The gate is closed!",
        "You lose all hopes of finding your daughter!",
      ]);
      this.game.gameOver();
    } else {
      println(["You enter the village."]);
      this.game.scenes.Road1A.welcome();
    }
  }

  right(): void {
    println(["You can't go right, try again!"]);
    this.move();
  }

  back(): void {
    println([
      "After all you have done to come here, You can't just go back.",
      "Take courage and go into the village!",
    ]);
    this.move();
  }

  left(): void {
    println(["You can't go left, try again!"]);
    this.move();
  }
}
