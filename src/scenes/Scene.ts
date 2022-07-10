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
    let fired = false;

    document.onkeydown = (ev) => {
      if (!fired) {
        fired = true;

        switch (ev.key) {
          case "ArrowUp":
          case "F":
          case "f":
            this.front();
            break;

          case "ArrowRight":
          case "R":
          case "r":
            this.right();
            break;

          case "ArrowDown":
          case "B":
          case "b":
            this.back();
            break;

          case "ArrowLeft":
          case "L":
          case "l":
            this.left();
            break;

          case "H":
          case "h":
            this.blueprint();
            break;

          case "I":
          case "i":
            this.game.player.checkItems();
            this.move();
            break;

          case "D":
          case "d":
            this.game.player.dropItem(this);
            break;

          default:
            break;
        }
      }
    };
  }
}
