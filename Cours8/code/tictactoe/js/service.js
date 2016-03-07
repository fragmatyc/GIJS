ticTacToe.service('TicTacToeService', function () {    
    return {
        newGame: function () {
            console.log('TicTacToeService: newGame()');
        },
        
        playerMove: function (row, column) {
            console.log('TicTacToeService: playerMove()');
        },
        
        drawBoard: function () {
            console.log('TicTacToeService: drawBoard()');
        }
    };
});