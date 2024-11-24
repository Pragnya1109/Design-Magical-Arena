class Arena {
  // bringing our players to field
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // match starts
  startMatch() {
    // check if both are alive
    while (this.player1.isAlive() && this.player2.isAlive()) {
      // decide who is attacker & who is defender
      let attacker, defender;
      [attacker, defender] = this.getFirstAttacker();
      // attack opponent
      attacker.attackOpponent(defender);
    }
    // declare winner
    const winner = this.player1.isAlive() ? this.player1 : this.player2;
    console.log(
      `\n\n***************** ${winner} wins the game!!! Congrats!! *****************`
    );
  }

  getFirstAttacker() {
    return this.player1.health < this.player2.health
      ? [this.player1, this.player2]
      : [this.player2, this.player1];
  }
}

module.exports = Arena;
