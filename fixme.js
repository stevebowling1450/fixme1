var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}

// MAKE CHANGES AFTER THIS

// This function lists all characters in the party
function listCharacters() {
    console.log("Characters:");
    for(obj in adventuringParty) {
        console.log(" * " + adventuringParty[obj].name)};
    
}

// This function should list all weapons for the character
var wizard=adventuringParty.wizard
var warrior=adventuringParty.warrior
function listWeapons(character) {
    console.log("Listing weapons for " + character.name + ":");
    for(i in character.weapons) {
        var weapon = character.weapons[i].name;
        console.log(" * " + weapon);
    }
    
}

// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
function weaponAttack(character, weaponName) {
    console.log(character.name + " attacks with his " + weaponName);
    var maxDamage;
    for(i in character.weapons) {
        var weapon = character.weapons[i];
        if(weapon.name == weaponName) {
            maxDamage = weapon.damage;
        }
    }
    console.log("He hits for " + Math.round( Math.random() * maxDamage ) + " damage");
}






listCharacters(adventuringParty);
listWeapons(wizard);
listWeapons(warrior);
weaponAttack(warrior, "Axe");
weaponAttack(wizard, "Staff");