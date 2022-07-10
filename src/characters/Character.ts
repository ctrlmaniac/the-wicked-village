import { println } from "../utils";

export default class Character {
  maxHealth: number;
  health: number;
  items: string[] = [];

  constructor(maxHealth: number) {
    this.maxHealth = maxHealth;
    this.health = this.maxHealth;
  }

  pickAnItem(item: string) {
    this.items.push(item);
    println([`You've picked ${item}!`]);
  }
}
