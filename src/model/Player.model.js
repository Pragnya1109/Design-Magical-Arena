class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;

    // adding some checks
    if (health <= 0 || strength <= 0 || attack <= 0) {
      throw new Error(
        `${name} must have positive values for health, strength, and attack.`
      );
    }
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  isAlive() {
    return this.health > 0;
  }

  //   attack starts
  attackOpponent(opponent) {
    console.log(
      `\n-------------${this.name} ATTACKS ${opponent.name} -------------\n`
    );
    // 1st rolls dice
    const attackRoll = this.rollDice();
    // 2nd calculates damage given
    const damage = this.attack * attackRoll;
    console.log(`${this.name} = Rolls: ${attackRoll}, Damage: ${damage}`);
    // 3rd opponent will take damage
    opponent.takeDamage(damage);
  }

  // defense starts
  takeDamage(damage) {
    console.log(`${this.name} defends!!`);
    // 1st rolls dice
    const defenseRoll = this.rollDice();
    // 2nd calculates defense
    const defense = this.strength * defenseRoll;
    // 3rd calculates damage taken
    const damageTaken = Math.max(0, damage - defense);
    console.log(
      `\n${this.name} = Rolls: ${defenseRoll}, Defense: ${defense}, DamageTaken: ${damageTaken}`
    );
    // 4th updates health if required
    this.health -= damageTaken;
    console.log(`${this.name} = Remaining Health: ${this.health}`);
  }

  toString() {
    return this.name;
  }
}
module.exports = Player;
