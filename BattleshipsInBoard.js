
// solution v1.0
const countBattleships = (board) => {

    let countShips = 0;

    for(let outer = 0; outer < board.length; outer++){
        for(let inner = 0; inner < board[0].length; inner++){
            if(board[outer][inner] !== 'X') continue;

            sink(board, outer, inner);
            countShips += 1;
        }
    }
}

const sink = (board, x, y) => {

    if(x < 0 || x >= board.length || y < 0
        || y >= board[0].length || board[x][y] !== 'X') return;

    sink(board, x - 1, y);
    sink(board, x + 1, y);
    sink(board, x, y - 1);
    sink(board, x, y + 1);
}