export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`${character.nickname}: character has already been added`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.add(character);
    }
  }

  toArray() {
    const resultArray = [];
    for (const member of this.members) {
      resultArray.push(member);
    }
    return resultArray;
  }
}
