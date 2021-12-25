const searchMatrix = function(matrix, target) {

    const search = (nums, start = 0, end = nums.length) => {

        if(start > end) return false;
        const middle = Math.floor( (start + end) / 2);

        if(nums[middle] === target) return true;

        if(nums[middle] > target) return search(nums, start, middle - 1);
        else return search(nums, middle + 1, end);
    }

    for (let index = 0; index < matrix.length; index++) {
        if(matrix[index][0] <= target &&
            matrix[index][matrix[index].length -1] >= target && search(matrix[index])) return true;
    }

    return false;
};


const input = [
    [ [[1]], 0],
    [ [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 ],
    [ [[1], [3], [5]], 5 ],
    [ [[1]], 2 ],
    [ [[1,1], [2,2]], 2]
]
// const result = searchMatrix([[1]], 0);
// const result = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);
// const result = searchMatrix([[1], [3], [5]], 5);
// const result = searchMatrix([[1]], 2);
input.forEach( ([matrix, target]) => console.log( 'searched: ' + target + ' ' + searchMatrix(matrix, target)) );
