import { Items } from "../items";
import Character from "./Character";

export default class Player extends Character {
  items = [Items.Torch];
}
