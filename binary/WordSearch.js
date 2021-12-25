const exist = function(board, word) {

    for (let outer = 0; outer < board.length; outer++) {
        for (let inner = 0; inner < board[outer].length; inner++) {
            if(board[outer][inner] === word[0] && search(outer, inner)) return true;
        }
    }

    return false;

    function search(x, y, number = 0, visited = []) {

        if( board[x] === undefined || board[x][y] === undefined ) return false;
        if( board[x][y] !== word[number] ) return false;

        if(number === word.length) return true;

        const temp = board[x][y];
        board[x][y] = '*';
        number++;

        if( search(x + 1, y, number) ) return true;
        if( search(x - 1, y, number) ) return true;
        if( search(x, y + 1, number) ) return true;
        if( search(x, y - 1, number) ) return true;

        board[x][y] = temp;

        return false;
    }
}

console.log( exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'));
console.log( exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'));
console.log( exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'));
console.log( exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"));
