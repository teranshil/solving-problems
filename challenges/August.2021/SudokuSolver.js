const solveSudoku = function(board) {

    if(board === null || board.length === 0) return board;
    solve( board );

    return board;
};

const solve = (board) => {

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {

            if(board[row][col] === '.') {
                for(let number = 1; number <= 9; number++) {
                    if( isValid(board, row, col, number) ) {
                        board[row][col] = number + '';

                        if(solve(board)) return true;
                        else board[row][col] = '.';

                    }
                }
                return false;
            }
        }
    }
    return true;
}

const isValid = (board, row, col, number) => {

    const rowStart = Math.floor(row / 3 ) * 3;
    const colStart = Math.floor(col / 3 ) * 3;

    for (let index = 0; index < 9; index++)
        if(parseInt(board[row][index]) === number) return false;

    for (let index = 0; index < 9; index++)
        if(parseInt(board[index][col]) === number) return false;

    for (let outer = rowStart; outer < rowStart + 3; outer++)
        for (let inner = colStart; inner < colStart + 3; inner++)
            if(parseInt(board[outer][inner]) === number) return false;

    return true;
}
const  board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log( solveSudoku(board) );