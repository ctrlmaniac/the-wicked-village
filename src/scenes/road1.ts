import Game from "../game";
import { println } from "../utils";
import Scene from "./scene";

export default class Road1 extends Scene {
  welcome() {
    println(["On your left there's a house"]);
  }
}
