ticTacToe.service('TicTacToeService', function () {
    var cross = "images/cross.png";
    var cross = "images/circle.png";
    
    return {
        newGame: function () {
            this.grid = new TicTacToeGame();
            this.drawBoard();
        },
        
        playerMove: function (row, column) {
            if (this.grid && this.grid.isGameInProgress()) {
                this.grid.playerMove(row, column);
                this.drawBoard();
            }
        },
        
        drawBoard: function () {
            for (var curColumn = 0; curColumn < 3; curColumn++) {
                for (var curRow = 0; curRow < 3; curRow++) {
                    var cellVal = this.grid.getCell(curRow, curColumn);
                    
                    switch (cellVal) {
                        case "X":
                            $('.ttt-grid-cell[data-row="' + curRow+ '"][data-column="' + curColumn+ '"]')
                                .css('background-image', 'url("images/cross.png")')
                                .animate({opacity: 1});
                            break;
                        case "O":
                            $('.ttt-grid-cell[data-row="' + curRow+ '"][data-column="' + curColumn+ '"]')
                                .css('background-image', 'url("images/circle.png")')
                                .animate({opacity: 1});
                            break;
                        default:
                            $('.ttt-grid-cell[data-row="' + curRow+ '"][data-column="' + curColumn+ '"]')
                                .animate({opacity: 0});
                    }
                }
            }
        }
    };
});