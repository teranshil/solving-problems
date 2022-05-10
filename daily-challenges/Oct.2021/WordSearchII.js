/** O(x*y*words), where x and y are dimensions of the board **/
const findWords = function(board, words) {
    const found = Array.from({ length: words.length }, () => false );

    const search = (x, y, word, index = 0) => {

        if(board[x] === undefined || board[x][y] === undefined) return false;
        if(board[x][y] !== word[index]) return false;

        if(index === word.length - 1) return true;
        index += 1;

        const temp = board[x][y];
        board[x][y] = '*';

        if ( search(x + 1, y, word, index)
            || search(x - 1, y, word, index)
            || search(x, y + 1, word, index)
            || search(x, y - 1, word, index) ) {

            board[x][y] = temp;
            return true;
        }

        board[x][y] = temp;
        return false;
    }

    const foundWords = [];
    for (let outer = 0; outer < board.length; outer++) {
        for (let inner = 0; inner < board[outer].length; inner++) {

            for (let index = 0; index < words.length; index++) {
                if(board[outer][inner] === words[index][0] && !found[index]) {
                    if (search(outer, inner, words[index])) {
                        found[index] = true;
                        foundWords.push(words[index]);
                    }
                }
            }
        }
    }

    return foundWords;
};

let board = [ ["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"] ];
let words = [ "oath","pea","eat","rain" ];

// console.log( findWords(board, ["oath","pea","eat","rain"]) );
// board = [ ["a","b"],["c","d"] ];
// console.log( findWords(board, ["abcb"]) );


/** Optimized solution **/
const findWordsOptimized = function(board, words) {

    function TrieNode() {
        this.children = Array.from({ length: 26 }, () => null);
        this.word =  '';
    }

    const root  = buildTries(words);
    const results = [];
    for (let outer = 0; outer < board.length; outer++) {
        for (let inner = 0; inner < board[outer].length; inner++) {
            search(outer, inner, root)
        }
    }

    return results;

    function search(x, y, letter) {

        if(board[x] === undefined || board[x][y] === undefined) return false;
        const character = board[x][y];
        const position = character.charCodeAt(0) - 97;

        if(board[x][y] === '*' || letter.children[position] === null) return false;
        letter = letter.children[position];

        if(letter.word !== '') {
            results.push(letter.word);
            letter.word = '';
            return true;
        }

        board[x][y] = '*';

        search(x + 1, y, letter);
        search(x - 1, y, letter);
        search(x, y + 1, letter);
        search(x, y - 1, letter);

        board[x][y] = character;
    }



    function buildTries (words) {
        const root = new TrieNode();
        for (const word of words) {
            let tempPointer = root;

            for (const letter of word) {
                const index = letter[0].charCodeAt(0) - 97;

                if(root.children[index] === null) tempPointer.children[index] = new TrieNode();
                tempPointer = tempPointer.children[index];
            }

            tempPointer.word = word;
        }

        return root;
    }
}

console.log( findWordsOptimized(board, words) );
