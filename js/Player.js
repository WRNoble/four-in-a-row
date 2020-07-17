class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.tokens = this.createTokens(21);
    this.id = id;
    this.color = color;
    this.active = active;
  }

  //   Creates a token object based upon the token class and returns it to an array.

  createTokens(num) {
    const tokens = [];

    for (let i = 0; i <= num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }

  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);
  }

  get activeToken() {
    return this.unusedTokens[0];
  }
}
