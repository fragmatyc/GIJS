module("TicTacToeService Test");

QUnit.test("GivenANewGame_WhenTheGameStarts_ThenPlayer1CharacterIsX", function (assert) {
    var game = new TicTacToeGame();
    assert.equal(game.getPlayer1Character(), "X");
});

QUnit.test("GivenANewGame_WhenTheGameStarts_ThenPlayer2CharacterIsO", function (assert) {
    var game = new TicTacToeGame();
    assert.equal(game.getPlayer2Character(), "O");
});

QUnit.test("GivenANewGame_WhenTheGameStarts_ThenCurrentlyPlayingIsPlayer1", function (assert) {
    var game = new TicTacToeGame();
    assert.equal(game.getCurrentlyPlaying(), 1);
});

QUnit.test("GivenANewGame_WhenAPlayer1Moves_ThenCurrentlyPlayingIsPlayer2", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    assert.equal(game.getCurrentlyPlaying(), 2);
});

QUnit.test("GivenAStartedGameWherePLayerOneHasMoved_WhenAPlayer2Moves_ThenCurrentlyPlayingIsPlayer1", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    game.playerMove(1, 1);
    assert.equal(game.getCurrentlyPlaying(), 1);
});

QUnit.test("GivenANewGame_WhenAPlayer1Moves_ThenTheCellContainsPlayer1Character", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    assert.equal(game.getCell(0, 0), game.getPlayer1Character());
});

QUnit.test("GivenPlayer1HasPlayed_WhenAPlayer2Moves_ThenTheCellContainsPlayer2Character", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    game.playerMove(2, 1);
    assert.equal(game.getCell(2, 1), game.getPlayer2Character());
});

QUnit.test("GivenACellOccupiedBylLayer1_WhenAPlayer2MovesOnTheSameCell_ThenTheCellContainsPlayer1Character", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    game.playerMove(0, 0);
    assert.equal(game.getCurrentlyPlaying(), 2);
});

QUnit.test("GivenACellOccupiedByPlayer1_WhenAPlayer2MovesOnTheSameCell_ThenCurrentlyPlayingIsStillPlayer2", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 0);
    game.playerMove(0, 0);
    assert.equal(game.getCell(0, 0), game.getPlayer1Character());
});

QUnit.test("GivenANewGame_WhenThenGameStarts_ThenThenGameIsNotFinished", function (assert) {
    var game = new TicTacToeGame();
    assert.equal(game.isGameInProgress(), true);
});

QUnit.test("GivenANewGame_WhenThenGameStarts_ThenBoardIsNotFull", function (assert) {
    var game = new TicTacToeGame();
    assert.equal(game.isBoardFull(), false);
});


QUnit.test("GivenANewGame_WhenAllCellsAreOccupied_ThenTheGameIsFinished", function (assert) {
    var game = new TicTacToeGame();
    
    game.playerMove(0, 0);
    game.playerMove(0, 1);
    game.playerMove(0, 2);
    game.playerMove(1, 0);
    game.playerMove(1, 2);
    game.playerMove(1, 1);
    game.playerMove(2, 0);
    game.playerMove(2, 2);
    game.playerMove(2, 1);
    
    assert.equal(game.isGameInProgress(), false);
});

QUnit.test("GivenANewGame_WhenPlayer1MovesOnRowGreaterThan2_ThenCurrentlyPlayingIsStillPlayer1", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(3, 0);
    assert.equal(game.getCurrentlyPlaying(), 1);
});

QUnit.test("GivenANewGame_WhenPlayer1MovesOnRowGreaterThan2_ThenTheCellContainsUndefined", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(3, 0);
    assert.equal(game.getCell(3, 0), undefined);
});

QUnit.test("GivenANewGame_WhenPlayer1MovesOnColumnGreaterThan2_ThenCurrentlyPlayingIsStillPlayer1", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 3);
    assert.equal(game.getCurrentlyPlaying(), 1);
});

QUnit.test("GivenANewGame_WhenPlayer1MovesOnColumnGreaterThan2_ThenTheCellContainsUndefined", function (assert) {
    var game = new TicTacToeGame();
    game.playerMove(0, 3);
    assert.equal(game.getCell(0, 3), undefined);
});

QUnit.test("GivenAHorizontalLineWith2CellOccupiedByPlayer1_WhenPlayer1MovesOnTheRemainingCellOfTheLine_ThenTheLineOfPlayerCharacter", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * X X X *
     * O O   *
     *       *
     *********/
    
    game.playerMove(0, 0);
    game.playerMove(1, 0);
    game.playerMove(0, 1);
    game.playerMove(1, 1);
    game.playerMove(0, 2);
    
    assert.equal(game.hasSomeoneWin(), true);
});

QUnit.test("GivenAHorizontalLineWith2CellOccupiedByPlayer2_WhenPlayer2MovesOnTheRemainingCellOfTheLine_ThenTheLineOfPlayerCharacter", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * O O O *
     * X X   *
     *     X *
     *********/
    
    game.playerMove(1, 0);
    game.playerMove(0, 0);
    game.playerMove(1, 1);
    game.playerMove(0, 1);
    game.playerMove(2, 2);
    game.playerMove(0, 2);
    
    assert.equal(game.hasSomeoneWin(), true);
});

QUnit.test("GivenAHorizontalLineWith2CellOccupiedByPlayer1_WhenPlayer1MovesOnTheRemainingCellOfTheLine_ThenThegameIsFinished", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * O O   *
     * X X X *
     *       *
     *********/

    game.playerMove(1, 0);
    game.playerMove(0, 0);
    game.playerMove(1, 1);
    game.playerMove(0, 1);
    game.playerMove(1, 2);
    
    assert.equal(game.isGameInProgress(), false);
});

QUnit.test("GivenAHorizontalLineWith2CellOccupiedByPlayer2_WhenPlayer2MovesOnTheRemainingCellOfTheLine_ThenThegameIsFinished", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * X X   *
     * O O O *
     * X     *
     *********/
    
    game.playerMove(0, 0);
    game.playerMove(1, 0);
    game.playerMove(0, 1);
    game.playerMove(1, 1);
    game.playerMove(2, 0);
    game.playerMove(1, 2);
    
    assert.equal(game.isGameInProgress(), false);
});

QUnit.test("GivenAColumnWith2CellOccupiedByPlayer1_WhenPlayer1MovesOnTheRemainingCellOfTheLine_ThenSomeoneHasWon", function (assert) { 
    var game = new TicTacToeGame();
    
    /********* 
     *   X   *
     * O X O *
     *   X   *
     *********/
    
    game.playerMove(0, 1);
    game.playerMove(1, 0);
    game.playerMove(1, 1);
    game.playerMove(1, 2);
    game.playerMove(2, 1);
    
    assert.equal(game.hasSomeoneWin(), true);
});

QUnit.test("GivenAColumnWith2CellOccupiedByPlayer2_WhenPlayer2MovesOnTheRemainingCellOfTheLine_ThenSomeoneHasWon", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     *   X O *
     * X   O *
     *   X O *
     *********/
    
    game.playerMove(0, 1);
    game.playerMove(0, 2);
    game.playerMove(1, 0);
    game.playerMove(1, 2);
    game.playerMove(2, 1);
    game.playerMove(2, 2);
    
    assert.equal(game.hasSomeoneWin(), true);
});


QUnit.test("GivenAVerticalLineWith2CellOccupiedByPlayer1_WhenPlayer1MovesOnTheRemainingCellOfTheLine_ThenThegameIsFinished", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * X O   *
     * X O   *
     * X     *
     *********/
    
    game.playerMove(0, 0);
    game.playerMove(0, 1);
    game.playerMove(1, 0);
    game.playerMove(1, 1);
    game.playerMove(2, 0);
    
    assert.equal(game.isGameInProgress(), false);
});

QUnit.test("GivenAnObliqueLineWith2CellOccupiedByPlayer2_WhenPlayer2MovesOnTheRemainingCellOfTheLine_ThenTheLineIsFull", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * X X O *
     *   O   *
     * O   X *
     *********/

    game.playerMove(0, 0);
    game.playerMove(0, 1);
    game.playerMove(1, 1);
    game.playerMove(1, 0);
    game.playerMove(2, 2);
    
    assert.equal(game.hasSomeoneWin(), true);
});
          
QUnit.test("GivenAnObliqueLineWith2CellOccupiedByPlayer1_WhenPlayer1MovesOnTheRemainingCellOfTheLine_ThenTheLineIsFull", function (assert) {
    var game = new TicTacToeGame();
    
    /********* 
     * O O X *
     *   X   *
     * X     *
     *********/
    
    game.playerMove(0, 0);
    game.playerMove(0, 1);
    game.playerMove(1, 1);
    game.playerMove(1, 0);
    game.playerMove(2, 2);
    
    assert.equal(game.hasSomeoneWin(), true);
});
