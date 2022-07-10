import { Player } from "./characters";
import {
  House1,
  House2,
  House2Diningroom,
  House2Hall,
  House2Livingroom,
  House3,
  House4,
  MainGate,
  Road1A,
  Road1B,
  Road1C,
  Road1D,
  Road2A,
} from "./scenes";
import { println } from "./utils";

export default class Game {
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  scenes = {
    MainGate: new MainGate(this),

    Road1A: new Road1A(this),
    Road1B: new Road1B(this),
    Road1C: new Road1C(this),
    Road1D: new Road1D(this),

    Road2A: new Road2A(this),

    House1: new House1(this),

    House2: new House2(this),
    House2Hall: new House2Hall(this),
    House2Livingroom: new House2Livingroom(this),
    House2Diningroom: new House2Diningroom(this),

    House3: new House3(this),

    House4: new House4(this),
  };

  gameOver(): void {
    println(["GAME OVER!"]);
    return;
  }

  play(): void {
    this.scenes.MainGate.welcome();
  }
}
