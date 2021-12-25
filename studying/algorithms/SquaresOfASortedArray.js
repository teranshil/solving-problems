const sortedSquares = function(nums) {

    // return nums.sort( (a, b) => Math.abs(a) - Math.abs(b)).map(e => e ** 2);

    let low = 0, high = nums.length - 1, index = nums.length - 1;
    const result = [];

    while(low <= high) {
        if(Math.abs( nums[low] ) > Math.abs(nums[high]) ) {
            result[index] = nums[low] ** 2;
            low++;
        } else {
            result[index] = nums[high] ** 2;
            high--;
        }

        index -= 1;
    }

    return result;
};

console.log( sortedSquares([ -4, -1, 0, 3, 10 ]) );