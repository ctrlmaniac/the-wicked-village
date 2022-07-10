import { Player } from "./characters";
import Game from "./game";
import "./index.scss";

const form = document.getElementById("form");
const input = document.getElementById("input") as HTMLFormElement;

// Transform input into a keyboard keydown event
form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const key = input.value.toLowerCase();

  let event = new KeyboardEvent("keydown", { key: key });

  document.dispatchEvent(event);
});

const player = new Player();

// Init the game
const game = new Game(player);

game.play();
