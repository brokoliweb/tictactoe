let game = (function () {
  let gameTable = document.getElementById("game-container");
  let infoBtn = document.getElementById("info");
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

  let countX = 0;
  let countO = 0;

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
    let gameBoardArray = Object.values(gameBoard);
    if (
      (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") ||
      (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") ||
      (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") ||
      (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") ||
      (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") ||
      (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") ||
      (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") ||
      (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X")
    ) {
      infoBtn.textContent = "Player Wins";
      stopGame();
    } else if (
      (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") ||
      (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") ||
      (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") ||
      (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") ||
      (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") ||
      (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") ||
      (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") ||
      (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O")
    ) {
      infoBtn.textContent = "Computer Wins";
      stopGame();
    } else if (!gameBoardArray.includes("")) {
      infoBtn.textContent = "Draw";
      stopGame();
    } else if (infoBtn.textContent === "Computer Turn") {
      Computerchoice();
    }
  };

  // listen and draw X on click
  let listen = function (e) {
    let gameCell = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gameCell.length; i++) {
      gameCell[i].addEventListener("click", drawX);
    }
  };

  let drawX = function (e) {
    if (infoBtn.textContent === "Your turn to play") {
      let humanPlay = (e.target.textContent = "X");
      let id = e.target.id;
      gameBoard[id[9]] = humanPlay;
      infoBtn.textContent = "Computer Turn";
    }

    checkWinner();
  };

  // computer play and drawO

  let Computerchoice = function () {
    let choice = Math.floor(Math.random() * 9);

    if (gameBoard[choice] === "") {
      let computerPlay = (document.getElementById(
        `grid-item${choice}`
      ).textContent = "O");
      gameBoard[choice] = computerPlay;
      infoBtn.textContent = "Your turn to play";
    } else {
      Computerchoice();
    }
    checkWinner();
  };

  // stop the game

  let stopGame = function () {
    let visible = document.getElementById("endgame");
    visible.setAttribute("class", "end");
  };

  return {
    render,
  };
})();

game.render();
