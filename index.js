var prompt = require('prompt');

prompt.start();

// var startGame = function() {
  var board = [ ['','',''],
                ['','',''],
                ['','',''] ];
// var currentPlayer = 'X';
// };

var printBoard = function(board) {
  console.log(board[0][0], '|', board[0][1],'|', board[0][2]);
  console.log(board[1][0], '|', board[1][1],'|', board[1][2]);
  console.log(board[2][0], '|', board[2][1],'|', board[2][2]);
}

printBoard(board);












// prompt.get(['username', 'email'], function (err, result) {
//     // 
//     // Log the results. 
//     // 
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });
