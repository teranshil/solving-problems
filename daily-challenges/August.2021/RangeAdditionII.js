const maxCount = function(m, n, ops) {

    let minRow = m, minCol = n;

    for (const option of ops) {
        minRow = Math.min(minRow, option[0]);
        minCol = Math.min(minCol, option[1]);
    }

    return minRow * minCol;
};

const options = [ [2,2], [3,3] ];
maxCount(3, 3, options);