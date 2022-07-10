import { println } from "../utils";

export default class Character {
  private maxHealth: number;
  private health: number;
  private items: string[] = [];

  constructor() {
    this.maxHealth = 20;
    this.health = this.maxHealth;
  }

  pickAnItem(item: string) {
    this.items.push(item);
    println([`You've picked ${item}!`]);
  }

  checkItems() {
    if (this.items.length == 0) {
      println(["There's nothing in your pockets."]);
    } else {
      println([...this.items]);
    }
  }
}
