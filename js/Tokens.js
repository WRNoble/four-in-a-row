class Token {
  constructor(color, owner) {
    this.color = color;
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.beenPlayed = false;
  }
}
