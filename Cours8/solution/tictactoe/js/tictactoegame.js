var TicTacToeGame = function () {
    this.playerCharacters = [undefined, "X", "O"];
    this.currentlyPlaying = 1;
    this.board = new Array(9);
    
    this.isGameInProgress = function () {
        return !(this.isBoardFull()
            || this.hasSomeoneWin());
    };
    
    this.isBoardFull = function () {
        var isBoardFull = true;
        var curCellIdx = 0;
        
        while (curCellIdx < this.board.length && isBoardFull) {
            isBoardFull = this.board[curCellIdx] !== undefined;
            curCellIdx++;
        }
        
        return isBoardFull;
    };
    
    this.getCurrentlyPlaying = function () {
        return this.currentlyPlaying;
    }
    
    this.playerMove = function (row, column) {
        var arrayIdxOfCellCoordinates = cellCoordinatesToArrayIdx(row, column);
        
        if (this.board[arrayIdxOfCellCoordinates] === undefined && row < 3 && column < 3) {
            this.board[arrayIdxOfCellCoordinates] = this.playerCharacters[this.currentlyPlaying];
            this.currentlyPlaying = (this.currentlyPlaying % 2) + 1; 
        }
    }
    
    this.getCell = function (row, column) {
        return this.board[cellCoordinatesToArrayIdx(row, column)];  
    };
    
    this.getPlayer1Character = function () {
        return this.playerCharacters[1];  
    };
    
    this.getPlayer2Character = function () {
        return this.playerCharacters[2];
    };
    
    this.hasSomeoneWin = function () {
        var stillLookingForAWinner = true;
        
        var currentPlayerValidated = 1;
        
        var rowsScore = []; 
        var columnsScore = [];
        var obliquesScore = []; 
        
        while (currentPlayerValidated <= 2 && stillLookingForAWinner) {
        var currentColumn = 0;
            rowsScore[currentPlayerValidated] = [0, 0, 0];
            columnsScore[currentPlayerValidated] = [0, 0, 0];
            obliquesScore[currentPlayerValidated] = [0, 0];
            
            while (currentColumn < 3 && stillLookingForAWinner) {
                var currentRow = 0;
                
                while (currentRow < 3 && stillLookingForAWinner) {
                    if (this.getCell(currentRow, currentColumn) === this.playerCharacters[currentPlayerValidated]) {
                        rowsScore[currentPlayerValidated][currentRow]++;
                        stillLookingForAWinner = stillLookingForAWinner && rowsScore[currentPlayerValidated][currentRow] < 3;

                        columnsScore[currentPlayerValidated][currentColumn]++;
                        stillLookingForAWinner = stillLookingForAWinner && columnsScore[currentPlayerValidated][currentColumn] < 3;

                        if (currentColumn == currentRow) {
                            obliquesScore[currentPlayerValidated][0]++;
                            stillLookingForAWinner = stillLookingForAWinner && obliquesScore[currentPlayerValidated][0] < 3;
                        } 
                        
                        if (currentColumn + currentRow == 2) {
                            obliquesScore[currentPlayerValidated][1]++;
                            stillLookingForAWinner = stillLookingForAWinner && obliquesScore[currentPlayerValidated][1] < 3;
                        }
                    }

                    currentRow++;
                }

                currentColumn++;
            }
            
            currentPlayerValidated++;
        }
            
        return !stillLookingForAWinner;
    };
    
    
    var cellCoordinatesToArrayIdx = function (row, column) {
        return (row * 3) + column;   
    };
};

