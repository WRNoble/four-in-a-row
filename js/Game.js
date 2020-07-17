class Game {
  constructor() {
    this.Players = this.createPlayers();
    this.ready = false;
    this.board = new Board();
  }

  // returns active player

  get activePlayer() {
    return this.Players.find((player) => player.active);
  }

  //   Creates and array of two player objects

  createPlayers() {
    const Players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13"),
    ];
    return Players;
  }

  //   Listens for the user to click the start game button

  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
