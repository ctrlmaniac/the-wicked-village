import { println } from "../utils";
import Scene from "./Scene";

export default class House2Hall extends Scene {
  welcome(): void {
    println([
      "The house is neglected. It seems that noone has lived in this house for a long time.",
    ]);
  }
}
