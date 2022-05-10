const isValidSudoku = function(board) {

    for (let outer = 0; outer < board.length; outer++) {
        for (let inner = 0; inner < board[outer].length; inner++) {

            if(!isValid(board, outer, inner))
                return false;
        }
    }

    return true;
};

const isValid = (board, row, col) => {

    const rowStart = Math.floor(row / 3 ) * 3;
    const colStart = Math.floor(col / 3 ) * 3;
    const number = board[row][col];

    for (let index = 0; index < 9; index++)
        if(index !== col && parseInt(board[row][index]) === number) return false;

    for (let index = 0; index < 9; index++)
        if(index !== row && parseInt(board[index][col]) === number) return false;

    for (let outer = rowStart; outer < rowStart + 3; outer++)
        for (let inner = colStart; inner < colStart + 3; inner++) {
            if(outer === row && inner === col) continue;
            if(parseInt(board[outer][inner]) === number) return false;
        }

    return true;
}