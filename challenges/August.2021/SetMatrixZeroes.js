// #73 leetcode
const setZeroes = function(matrix) {

    const positions = [], visitedPositions = new Set();
    for(let outer = 0; outer < matrix.length; outer++) {
        for (let inner = 0; inner < matrix[outer].length; inner++) {
            // if(matrix[outer][inner] === 0) positions.push( [outer, inner] );
            if(matrix[outer][inner] !== 0) continue;
            if(visitedPositions.has(outer + '' + inner)) continue;

            visitedPositions.add( outer + '' + inner);
            markZeroes(outer, inner, matrix, visitedPositions);
        }
    }

    // for (let index = 0; index < positions.length; index++) {
    //     markZeroes(positions[index][0], positions[index][1], matrix, visitedPositions);
    // }

    return matrix;
};

const markZeroes = (row, col, array, visited) => {

    let tempRow = 0, tempCol = 0;
    while(tempRow < array.length) {
        array[tempRow][col] = 0;
        tempRow += 1;
        visited.add(row + '' + col);
    }

    while(tempCol < array[row].length) {
        array[row][tempCol] = 0;
        tempCol += 1;
        visited.add(row + '' + col);
    }
}

const input = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]];
const expected = [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
console.table( input );
console.table( expected );

console.table( setZeroes( input ) );


// #73 leetcode second version

const setZeroesV2 = ( array ) => {

    const rows = new Set();
    const cols = new Set();

    for(let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
           if(array[row][col] !== 0) continue;

           rows.add(row);
           cols.add(col);
        }
    }

    for(let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if(rows.has(row) || cols.has(col)) {
                array[row][col] = 0;
            }
        }
    }


}