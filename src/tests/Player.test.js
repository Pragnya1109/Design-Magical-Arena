const Player = require("../model/Player.model");

describe("Player Class", () => {
  test("Player should initialize correctly", () => {
    const player = new Player("Player1", 100, 10, 5);
    expect(player.name).toBe("Player1");
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
  });

  test("rollDice should return a number between 1 and 6", () => {
    const player = new Player("Player1", 100, 10, 5);
    const roll = player.rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });

  test("attackOpponent should calculate damage and reduce opponent health", () => {
    const player1 = new Player("Player1", 100, 10, 5);
    const player2 = new Player("Player2", 100, 8, 4);

    player1.attackOpponent(player2);

    // Since rollDice() is random, just check that player2's health has decreased.
    expect(player2.health).toBeLessThan(100);
  });

  test("takeDamage should correctly reduce health", () => {
    const player = new Player("Player1", 100, 10, 5);
    player.takeDamage(50); // Simulate 50 damage
    expect(player.health).toBeLessThan(100);
  });

  test("isAlive should return true if health > 0 and false otherwise", () => {
    const player = new Player("Player1", 1, 10, 5);
    expect(player.isAlive()).toBe(true);

    player.takeDamage(100); // Simulate fatal damage
    expect(player.isAlive()).toBe(false);
  });
});
