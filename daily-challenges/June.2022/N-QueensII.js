const totalNQueens = function(n) {

    /* (x - y) -> const (negative diagonal), x + y -> const (positive diagonal)  */
    const cols = new Set();
    const posDiagonal = new Set(), negDiagonal = new Set();

    const backtracking = (rows = 0) => {
        if(rows === n) return 1;

        let count = 0;
        for (let col = 0; col < n; col++) {
            if(cols.has(col) || posDiagonal.has(rows + col) || negDiagonal.has(rows - col)) continue;

            cols.add(col);
            posDiagonal.add(rows + col);
            negDiagonal.add(rows - col);

            count += backtracking(rows + 1);

            cols.delete(col);
            posDiagonal.delete(rows + col);
            negDiagonal.delete(rows - col);
        }

        return count;
    }

    return backtracking();
};

console.log(totalNQueens(1));
