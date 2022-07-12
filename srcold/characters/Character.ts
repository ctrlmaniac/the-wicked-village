import Scene from "../scenes/Scene";
import { println } from "../utils";

export default class Character {
  private maxHealth: number;
  private health: number;
  items: string[] = [];

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

  dropItem(scene: Scene) {
    if (this.items.length === 0) {
      println(["There's nothing in your pockets."]);
    } else {
      let fired = false;

      println([
        "Pick the number of the item you want to drop.",
        "Be careful! You won't be able to recover!",
        "Press Delete, or Q to abort.",
      ]);

      this.checkItems();

      document.onkeydown = (ev) => {
        if (!fired) {
          if (ev.key === "Delete" || ev.key === "q") {
            println(["You didn't drop anything."]);

            scene.move();
          } else {
            const key = parseInt(ev.key);

            if (isNaN(key)) {
              println(["You chose wrong!"]);
              this.dropItem(scene);
            } else {
              if (key <= this.items.length) {
                const item = this.items[key];
                println(["You've just dropped " + item]);
                this.items.splice(key, 1);

                scene.move();
              } else {
                println(["This item does not exist!"]);
                this.dropItem(scene);
              }
            }
          }
        }
      };
    }
  }
}
