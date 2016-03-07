ticTacToe.controller('GridController', function ($scope, TicTacToeService) {
    $scope.newGame = function () {
        TicTacToeService.newGame();
        $scope.gameHasEnded  = false;
    }
    
    $scope.onClickCell = function (event) {
        console.log('GridController: onClickCell(event)');
        
        var row = $(event.target).data("row");
        var column = $(event.target).data("column");
        
        TicTacToeService.playerMove(row, column);
    }
    
    $scope.newGame();
});