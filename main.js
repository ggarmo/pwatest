if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg => console.log('Service Worker Registered', reg))
  .catch(err => console.log('Service Worker Not Registered', err));
}

let board = Array(9).fill(null);
let turn = 'X';
const boardDiv = document.getElementById('board');
const resetButton = document.getElementById('reset');

function createBoard() {
  boardDiv.innerHTML = '';
  for(let i = 0; i < board.length; i++) {
    const div = document.createElement('div');
    div.addEventListener('click', () => makeMove(i));
    div.textContent = board[i];
    boardDiv.appendChild(div);
  }
}

function makeMove(i) {
  if(board[i] === null) {
    board[i] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    createBoard();
    if(checkWinner()) {
      alert(`${turn === 'X' ? 'O' : 'X'} wins!`);
      resetGame();
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let condition of winConditions) {
    if(board[condition[0]] !== null &&
       board[condition[0]] === board[condition[1]] &&
       board[condition[0]] === board[condition[2]]) {
         return true;
    }
  }
  return false;
}

function resetGame() {
  board = Array(9).fill(null);
  createBoard();
}

resetButton.addEventListener('click', resetGame);
createBoard();
