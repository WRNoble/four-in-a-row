class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  //   Creates array of spaces and returns an array of space objects

  createSpaces() {
    const spaces = [];

    for (let x = 0; x <= this.columns; x++) {
      const column = [];
      for (let y = 0; y <= this.rows; y++) {
        let space = new Space(x, y);
        column.push(space);
      }

      spaces.push(columns);
    }

    return spaces;
  }
}
