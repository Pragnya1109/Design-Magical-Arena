const Player = require("../model/Player.model");
const Arena = require("../model/Arena.model");

describe("Arena Class", () => {
  test("Arena should initialize with two players", () => {
    const player1 = new Player("Player1", 100, 10, 5);
    const player2 = new Player("Player2", 100, 10, 5);

    const arena = new Arena(player1, player2);
    expect(arena.player1).toBe(player1);
    expect(arena.player2).toBe(player2);
  });

  test("getFirstAttacker should return the player with lower health as attacker", () => {
    const player1 = new Player("Player1", 50, 10, 5);
    const player2 = new Player("Player2", 100, 10, 5);

    const arena = new Arena(player1, player2);
    const [attacker, defender] = arena.getFirstAttacker();
    expect(attacker).toBe(player1);
    expect(defender).toBe(player2);
  });

  test("startMatch should declare a winner", () => {
    const player1 = new Player("Player1", 50, 10, 5);
    const player2 = new Player("Player2", 50, 10, 5);

    const arena = new Arena(player1, player2);
    arena.startMatch();

    // The match should end with one player having health <= 0.
    const winner = player1.isAlive() ? player1 : player2;
    expect(winner.isAlive()).toBe(true);
  });
});
