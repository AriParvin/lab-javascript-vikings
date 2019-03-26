// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = 300;
		this.strength = 150;
		this.attack = function attack() {
			return this.strength;
		};
		this.receiveDamage = function receiveDamage(damage) {
			this.health -= damage;
		};
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(name, health, strength);
		this.name = "Harald";
		this.battleCry = function battleCry() {
			return `Odin Owns You All!`;
		};
		this.receiveDamage = function receiveDamage(damage) {
			this.health -= damage;
			if (this.health > 0) {
				return `${this.name} has received ${damage} points of damage`;
			} else {
				return `${this.name} has died in act of combat`;
			}
		};
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
		this.health = 60;
		this.strength = 25;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}
// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
		this.addViking = function addViking(Viking) {
			this.vikingArmy.push(Viking);
		};
		this.addSaxon = function addSaxon(Saxon) {
			this.saxonArmy.push(Saxon);
		};
	}
	vikingAttack() {
		const randomViking = vikingArmy[Math.floor(Math.random() * 100)];
		const randomSaxon = saxonArmy[Math.floor(Math.random() * 100)];
		return randomSaxon.receiveDamage(randomViking.strength);
	}
}
console.log();
