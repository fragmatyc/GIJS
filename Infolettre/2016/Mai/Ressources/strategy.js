/**
 * Strategy Pattern
 * GIJS - Infolettre - Mai 2016
 * Démonstration de l'implémentation du Strategy Pattern en JavaScript.
 */

'use strict';

// Contexte, cette classe contient et execute la strategie
class Person {    
    pickRandomNumber() {
        console.log('Result: ' + this.randomNumberStrategy()); 
    }
}

// Strategie 1 - Encapsulation d'un algorithme
let DiceRollRandomNumberStrategy = function () {
    console.log("I'm picking up the dice.");
    console.log("* Shake shake shake *");
    console.log("Throwing...");
    console.log("* Dice rolling sound *");
    
    return Math.floor((Math.random() * 6) + 1);
}

// Strategie 2 - Encapsulation d'un algorithme
let CoinFlipRandomNumberStrategy = function () {
    console.log("I'm picking up a coin.");
    console.log("* flip *");
    console.log("* Coin bouncing *");
    
    return Math.floor((Math.random() * 2) + 1) === 1 ? 'Head' : 'Tail';
}


// Utilisation
let me = new Person();
me.randomNumberStrategy = CoinFlipRandomNumberStrategy;
me.pickRandomNumber();