import { Character } from "./Character.js";

export class Team {
  constructor(characters = []) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if(index < characters.length) {
          return {
            value: characters[index++], done: false
          };
        } else {
          return { done: true };
        }
      }
    };
  }
}