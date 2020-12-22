let game = (function () {
  let gameTable = document.getElementById("game-container");
  let gameBoard = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  };
  

  // render gametable at the start
  let render = function () {
    for (let i = 0; i < 9; i++) {
      let cell = document.createElement("div");
      gameTable.appendChild(cell).className = "grid-item";
      gameTable.appendChild(cell).id = `grid-item${i}`;
    }
    listen();
  };

  // check if there is a winner
  let checkWinner = function () {
   if ((gameBoard[0] && gameBoard[1] && gameBoard[2] === 'X') || (gameBoard[3] && gameBoard[4] && gameBoard[5] === 'X') || (gameBoard[6] && gameBoard[7] && gameBoard[8] === 'X') || (gameBoard[0] && gameBoard[3] && gameBoard[6] === 'X') || (gameBoard[1] && gameBoard[4] && gameBoard[7] === 'X') || (gameBoard[2] && gameBoard[5] && gameBoard[8] === 'X') || (gameBoard[0] && gameBoard[4] && gameBoard[8] === 'X') || (gameBoard[2] && gameBoard[4] && gameBoard[6] === 'X')) {
    document.getElementById('info').textContent = 'Player Wins';
   } else if ((gameBoard[0] && gameBoard[1] && gameBoard[2] === 'O') || (gameBoard[3] && gameBoard[4] && gameBoard[5] === 'O') || (gameBoard[6] && gameBoard[7] && gameBoard[8] === 'O') || (gameBoard[0] && gameBoard[3] && gameBoard[6] === 'O') || (gameBoard[1] && gameBoard[4] && gameBoard[7] === 'O') || (gameBoard[2] && gameBoard[5] && gameBoard[8] === 'O') || (gameBoard[0] && gameBoard[4] && gameBoard[8] === 'O') || (gameBoard[2] && gameBoard[4] && gameBoard[6] === 'O')) {
    document.getElementById('info').textContent = 'Computer Wins';

   }
  }

  // listen and draw X on click
  let listen = function (e) {
    let gameCell = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gameCell.length; i++) {
      gameCell[i].addEventListener("click", drawX);
    }
  };

  let drawX = function (e) {
    let humanPlay = (e.target.textContent = "X");
    let id = e.target.id;
    gameBoard[e.target.id[9]] = humanPlay;
    
    
    checkWinner();
    
  };
  return {
    render,
  };
})();

game.render();
