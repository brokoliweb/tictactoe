

let game = (function() {
    let gameTable = document.getElementById('game-container')
    let gameBoard = {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
    };
    // render gametable at the start
    let render = function() {
        for (let i =0; i < 9; i++) {
            let cell = document.createElement('div');
            gameTable.appendChild(cell).className = 'grid-item';
            gameTable.appendChild(cell).id = `grid-item${i}`;
        }
        listen();
    }
    
    // listen and draw X on click
    let listen = function(e) {
        let gameCell = document.querySelectorAll('.grid-item')
        for ( let i =0; i<gameCell.length; i++) {
            gameCell[i].addEventListener('click', drawX)
        }
        
    };

    let drawX = function(e) {
        let humanPlay = e.target.textContent = 'X';
        let id = e.target.id;
        gameBoard[e.target.id[9]] = humanPlay;
        console.table(gameBoard)
    }
    return {
        render
    }
})();

game.render();
