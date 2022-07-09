import Game from "./game";
import "./index.scss";

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const input = form.elements[0] as HTMLFormElement;
  const key = input.value;

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: key,
    })
  );
});

const game = new Game();

game.play();
