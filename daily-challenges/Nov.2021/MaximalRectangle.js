const maximalRectangle = function(matrix) {

    let max = 0;
    const search = (x, y, width = 1, height = 1) => {
        if(matrix[x][y] === '0') return [ width, height];

        return search(x + 1, y, width + 1, height) * search(x, y + 1, width, height + 1);
    }

    for (let outer = 0; outer < matrix.length; outer++) {
        for (let inner = 0; inner < matrix[outer].length; inner++) {
            if(matrix[outer][inner] === '0') continue;

            max = Math.max(max, search(outer, inner))

        }
    }


    return max;
};

console.log( maximalRectangle([ ["1","0","1","0","0"], ["1","0","1","1","1"], ["1","1","1","1","1"], ["1","0","0","1","0"] ]) );
