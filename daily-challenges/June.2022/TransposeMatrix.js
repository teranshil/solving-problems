const transpose = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const array = Array.from({ length: cols }, () => Array.from({ length: rows }, () => 0 ));

    for (let outer = 0; outer < rows; ++outer) {
        for (let inner = 0; inner < cols; ++inner) {
            array[inner][outer] = matrix[outer][inner];
        }
    }

    return array;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));;
console.log(transpose( [[1,2,3],[4,5,6]]));
