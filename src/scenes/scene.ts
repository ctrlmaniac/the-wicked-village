import Game from "../game";

export default class Scene {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  front() {}
  right() {}
  back() {}
  left() {}

  move() {
    document.onkeydown = (ev) => {
      let key = ev.key;

      if (key == "f") {
        this.front();
      }
    };
  }
}
