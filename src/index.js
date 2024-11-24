const Player = require("./model/Player.model");
const Arena = require("./model/Arena.model");

// Creating our Players
const player1 = new Player("Player A", 50, 5, 10);
const player2 = new Player("Player B", 100, 10, 5);

// Creating our BattleField
const arena = new Arena(player1, player2);

// Game begins
arena.startMatch();
