var TicTacToeGame = function () {
    // Retourne false si la partie est terminée
    this.isGameInProgress = function () {};
    
    // Retourne true si la grille est pleine
    this.isBoardFull = function () {};
    
    // Place un X ou un O sur la grille à la bonne cellule
    this.playerMove = function (row, column) {}
    
    // Obtient la valeur d'une cellule ("X", "O" ou undefined)
    this.getCell = function (row, column) {};
    
    // retourne true si un joueur a gagné!
    this.hasSomeoneWin = function () {};
};