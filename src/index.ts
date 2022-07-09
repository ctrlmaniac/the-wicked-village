import Game from "./game";
import "./index.scss";

const input = document.getElementById("input") as HTMLFormElement;

input.addEventListener("change", (ev) => {
  ev.preventDefault();

  const key = input.value.toLowerCase();

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: key,
    })
  );
});

const game = new Game();

game.play();
