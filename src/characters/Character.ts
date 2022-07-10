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
      const pocket: string[] = [];

      for (let i = 0; i < this.items.length; i++) {
        const element = this.items[i];
        pocket.push(`${i}: ${element}`);
      }

      println([...pocket]);
    }
  }

  checkItem(item: string) {
    return this.items.includes(item);
  }
}
