class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  isAlive() {
    return this.health > 0;
  }

  //   attack starts
  attackOpponent(opponent) {
    // 1st rolls dice
    const attackRoll = this.rollDice();
    // 2nd calculates damage given
    const damage = this.attack * attackRoll;
    // 3rd opponent will take damage
    opponent.takeDamage(damage);
  }

  // defense starts
  takeDamage(damage) {
    // 1st rolls dice
    const defenseRoll = this.rollDice();
    // 2nd calculates defense
    const defense = this.strength * defenseRoll;
    // 3rd calculates damage taken
    const damageTaken = damage - defense;
    // 4th updates health if required
    this.health -= damageTaken;
  }
}
module.exports = Player;
