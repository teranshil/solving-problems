const solve = function(board) {
    const visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false) );


    for (let outer = 0; outer < board.length; outer++) {
        for (let inner = 0; inner < board[outer].length; inner++) {
            if(board[outer][inner] === 'O' && !visited[outer][inner]) search(outer, inner, outer, inner);
        }
    }

   function search(x, y, initialX, initialY) {

       if(board[x] === undefined || board[x][y] === undefined) return true;
       if(board[x][y] === 'X') return false;

        if(board[x][y] === 'O') visited[x][y] = true;

        if(!search(x + 1, y) && (initialX !== x && initialY !== y)) return false;
        if(!search(x - 1, y)) return false;
        if(!search(x, y + 1)) return false;
        if(!search(x, y - 1)) return false;

        board[x][y] = 'X';
        visited[x][y] = true;

        return true;
    }

    return board;
};

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log( solve(board) );
console.log( solve([["X"]]) );
console.log( solve([["X","O","X"],["O","X","O"],["X","O","X"]]) );
console.log( solve([["O","O","O","O","X","X"],["O","O","O","O","O","O"],["O","X","O","X","O","O"],["O","X","O","O","X","O"],["O","X","O","X","O","O"],["O","X","O","O","O","O"]]) );
