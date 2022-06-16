const solveNQueens = function(n) {

    /* (x - y) -> const (negative diagonal), x + y -> const (positive diagonal)  */
    const cols = new Set();
    const posDiagonal = new Set(), negDiagonal = new Set();

    const answ = [];
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    const backtracking = (rows = 0) => {
        if(rows === n) {
            let copy = [];
            for (let index = 0; index < board.length; index++) {
                copy[index] = board[index].join('');
            }

            return answ.push(copy);
        }

        for (let col = 0; col < n; col++) {
            if(cols.has(col) || posDiagonal.has(rows + col) || negDiagonal.has(rows - col)) continue;

            cols.add(col);
            posDiagonal.add(rows + col);
            negDiagonal.add(rows - col);
            board[rows][col] = 'Q';

            backtracking(rows + 1);

            cols.delete(col);
            posDiagonal.delete(rows + col);
            negDiagonal.delete(rows - col);
            board[rows][col] = '.';
        }
    }

    backtracking();
    return answ;
};

console.log(solveNQueens(4));
