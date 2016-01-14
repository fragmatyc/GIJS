/**
 * Démonstration de la syntaxe de JS
 *
 * Commentaire sur plusieurs lignes
 */





// Commentaire sur une seule ligne





// Déclaration de variable. "var" définit le scope de la variable
// à celui en cours (ici, global!). JS est non-typé.
var variable;





// Attribuation d'une valeur à une variable
variable = true; // Boolean
variable = 1; // Number
variable = "Hello world!"; // String
variable = []; // Array
variable = {}; // Objet
variable = new Date(); // Date








// Fonction
var log = function(msg) {
    // Log!
    console.log(msg);
}

var logNewLine = function() {
    log(" ");
};

var toBit = function(num) {
    return ((num >>> 0).toString(2));
}






log("Liste des opérateurs - Arithmétique binaire");
log("    Addition: 5 + 5 = " + (5 + 5));
log("    Soustraction: 10 - 3 = " + (10 + 3));
log("    Division: 10 / 5 = " + (10 / 5));
log("    Multiplication: 2 * 5 = " + (2 * 5));
log("    Modulo: 10 % 3 = " + (10 % 3));
logNewLine();





log("Liste des opérateurs - Arithmétique unaire");
log("    Conversion String->Number: typeof(+\"1\") = " + typeof(+"1"));

var valeur = 10;
var negation = -valeur;
log("    Négation: -valeur = " + negation);
logNewLine();





log("Incrémentation (pré/suffixe): ++");
log("    valeur = " + valeur);
log("    ++valeur = " + ++valeur);
log("    valeur = " + valeur);
log("    valeur++ = " + valeur++);
log("    valeur = " + valeur);
logNewLine();







log("Décrémentation (pré/suffixe): --");
log("    --valeur = " + --valeur);
log("    valeur = " + valeur);
log("    valeur-- = " + valeur--);
log("    valeur = " + valeur);
logNewLine();
            





log("Liste des opérateurs - Assignation");
var valeur = 10;
log("    Assignation régulière: valeur = 10");

valeur += 10
log("    Addition/Assignation: valeur += 10");

valeur -= 10;
log("    Soustraction/Assignation: valeur -= 10");

valeur *= 5;
log("    Multiplication/Assignation: valeur *= 5");

valeur /= 5;
log("    Division/Assignation: valeur /= 5");
logNewLine();










log("Liste des opérateurs - Comparaison");
log("    Égal: 10 == 10 (" + (10 == 10) +")");
log("    Égal: true == 1 (" + (true == 1) +")");
log("    Non égal: 10 != 10 (" + (10 != 10) +")");
log("    PGQ: 10 > 10 (" + (10 > 10) +")");
log("    PG ou égal: 10 >= 10 (" + (10 >= 10) +")");
log("    PPQ: 10 < 10 (" + (10 < 10) +")");
log("    PP ou égal: 10 <= 10 (" + (10 <= 10) +")");
log("    Identique: 10 === 10 (" + (10 === 10) +")");
log("    Identique: true === 1 (" + (true === 1) +")");
log("    Non identique: true !== 1 (" + (true !== 1) +")");
logNewLine();
   







log("Liste des opérateurs - Logique");
log("    Unaire - Négation: !true = " + !true);
log("    Binaire - Disjonction: true || false = " + (true || false));
log("    Binaire - Conjonction: true && false = " + (true && false));
log("    Ternaire: true ? true : false = " + (true ? true : false));
logNewLine();








log("Tout est true sauf: ");
log("    \"\" ? true : false (" + ("" ? true : false) + ")");
log("    '' ? true : false (" + ('' ? true : false) + ")");
log("    0 ? true : false (" + (0 ? true : false) + ")");
log("    -0 ? true : false (" + (-0 ? true : false) + ")");
log("    NaN ? true : false (" + (NaN ? true : false) + ")");
log("    null ? true : false (" + (null ? true : false) + ")");
log("    undefined ? true : false (" + (undefined ? true : false) + ")");
log("    false ? true : false (" + (false ? true : false) + ")");
logNewLine();








log("Liste des opérateurs - Bit à Bit binaire");
log("    Et: " + toBit(10) + " & " + toBit(7) + " = " + toBit(10 & 7));
log("    Ou: " + toBit(14) + " | " + toBit(3) + " = " + toBit(14 | 3));
log("    OuX: " + toBit(14) + " ^ " + toBit(3) + " = " + toBit(14 ^ 3));
log("    ShiftL: " + toBit(14) + " << 3 = " + toBit(14 << 3));
log("    ShiftR: " + toBit(-14) + " >> 3 = " + toBit(-14 >> 3));
log("    ShiftR (zero): " + toBit(-14) + " >>> 3 = " + toBit(-14 >>> 3));
logNewLine();









log("Liste des opérateurs - Bit à Bit unaire");
log("    Non: ~" + ((10 >>> 0).toString(2)) + " = " + ((~10 >>> 0).toString(2)));
logNewLine();








log("Liste des opérateurs - String");
log("    Assignation: variable = 'Bonjour'");
log("    Concaténation: variable = 'Hello ' + 'World'");
log("    Concaténation et assignation: variable += 'abc'");
logNewLine();










log("Syntaxe - Condition - If")
variable = 11;
if (variable == 10) {
    log("    Condition 10 respectée.");
} else if (variable == 15) {
    log("    Condition 15 respectée.");
} else {
    log("    Condition autre respectée.");
}
logNewLine();








log("Syntaxe - Condition - Switch");
switch (variable) {
    case 10:
        log("    Cas 10 respecté.");
        break;
    case 11:
        log("    Cas 11 respecté.");
        break;
    default:
        log("    Cas autre respecté.");
        break;
}
logNewLine();








log("Syntaxe - Boucle - For");
for (var i = 0; i < 3; i ++) {
    log("    Itération For, #" + i);
}
logNewLine();









log("Syntaxe - Boucle - For In");
var tableau = [0, 1, 2];
for (var i in tableau) {
    log("    Itération For In, #" + i);
}
logNewLine();









log("Syntaxe - Boucle - While");
var i = 0;
while(i < 3) {
    log("    Itération While, #" + i);
    i++;    
};
logNewLine();







log("Syntaxe - Boucle - Do While");
i = 0;
do {
    log("    Itération Do/While, #" + i);
    i++;    
} while (i < 3);
logNewLine();








log("Syntaxe - Try/Catch");
try {
    throw new Error("Oops!"); // Error en JS
} catch (e) {
    log("    Exception: " + e.message);
}
logNewLine();









log("Syntaxe - Objet");
var Obj1 = {couleur: "Rouge"};
log("    Créé avec {}: " + JSON.stringify(Obj1));

var Obj2 = new Object();
Obj2.couleur = "Rouge";
log("    Créé avec new Object(): " + JSON.stringify(Obj2));

function Obj3(couleur) {
    this.couleur = couleur;
}
log("    Créé avec constructeur: " + JSON.stringify(new Obj3("Rouge")));
logNewLine();










log("Syntaxe - Objet - Héritage et Polymorphisme");
function Voiture() {
    this.demarrer = function() {
        log("        Voiture démarrée.");
    }
}

function VoitureSport() {
    this.demarrer = function() {
        log("        Voiture Sport démarrée.");
    }
}

var voitureInstance = new Voiture();

VoitureSport.prototype = voitureInstance;
VoitureSport.prototype.constructor = VoitureSport;

var voitureSportInstance = new VoitureSport();
log("    voitureSportInstance instanceof Voiture = " + (voitureSportInstance instanceof Voiture));
log("    voitureSportInstance.demarrer()");
voitureSportInstance.demarrer();
log("    voitureInstance.demarrer()");
voitureInstance.demarrer();
