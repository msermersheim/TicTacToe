var prompt = require('prompt');

prompt.start();

var checkWinner = function(board, player, row, col) {
  // check horizontal
  if (board[row][(col + 2) % 3] === player && board[row][(col + 1) % 3] === player) {
    return true;
  }
  // check vertical
  if (board[(row + 2) % 3][col] === player && board[(row + 1) % 3][col] === player) {
    return true;
  }
  // check major diag
  if (row === col && board[(row + 2) % 3][(col + 2) % 3] === player && board[(row + 1) % 3][(col + 1) % 3] === player) {
    return true;
  }
  // check minor diag
  if (row + col === 2 && board[(row + 2) % 3][(col + 1) % 3] === player && board[(row + 1) % 3][(col + 2) % 3] === player) {
    return true;
  }
  return false;
};

var printBoard = function(board) {
  console.log(board[0][0], '|', board[0][1],'|', board[0][2]);
  console.log(board[1][0], '|', board[1][1],'|', board[1][2]);
  console.log(board[2][0], '|', board[2][1],'|', board[2][2]);
}

var startGame = function() {
  var board = [ [' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' '] ];
  var currentPlayer = 'X';
  takeTurn(currentPlayer, board);
};

var takeTurn = function(currentPlayer, board) {
  printBoard(board);
  console.log('Player ', currentPlayer, ', pick square number (1-9)');
  prompt.get(['square'], function (err, result) {
    if (err) { return onErr(err); }
    if (!(result.square > 0 && result.square < 10)) {
      console.log('Please choose from 1-9');
      takeTurn(currentPlayer, board);
    } else {
      var row = Math.floor((result.square - 1) / 3);
      var col = (result.square - 1) % 3;
      if(board[row][col] !== ' ') {
        console.log('Please select an empty square');
        takeTurn(currentPlayer, board);
      } else {
        board[row][col] = currentPlayer;
        if (checkWinner(board, currentPlayer, row, col)) {
          printBoard(board);
          console.log('Player ', currentPlayer, ' wins!');
          console.log('Play again? (y/n)');
          prompt.get(['answer'], function (err, result) {
            if (err) { return onErr(err); }
            if (result.answer.toLowerCase() === 'y') {
              startGame();
            } else {
              console.log('Thanks for playing!');
            }
          });
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          takeTurn(currentPlayer, board);
        }
      }
    }
  });
};

startGame();
