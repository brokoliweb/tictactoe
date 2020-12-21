

let gameBoard = (function() {
    let gameTable = document.getElementById('game-container')

    // render gametable at the start
    let render = function() {
        for (let i =0; i < 9; i++) {
            let cell = document.createElement('div');
            gameTable.appendChild(cell).className = 'grid-item';
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
        e.target.textContent = 'X';
    }
    return {
        render
    }
})();

gameBoard.render();

// event listeners

let listeners = (function() {

})();