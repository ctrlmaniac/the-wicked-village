import Game from "../game";
import { println } from "../utils";

export default class Scene {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  blueprint(): void {}

  welcome(): void {}

  front(): void {
    println(["There's nothing here, try again!"]);
    this.move();
  }

  right(): void {
    println(["There's nothing here, try again!"]);
    this.move();
  }

  back(): void {
    println(["There's nothing here, try again!"]);
    this.move();
  }

  left(): void {
    println(["There's nothing here, try again!"]);
    this.move();
  }

  move(): void {
    document.onkeydown = (ev) => {
      let key = ev.key;

      switch (key) {
        case "f":
          this.front();
          break;

        case "r":
          this.right();
          break;

        case "b":
          this.back();
          break;

        case "l":
          this.left();
          break;

        case "h":
          this.blueprint();
          break;

        default:
          break;
      }
    };
  }
}
