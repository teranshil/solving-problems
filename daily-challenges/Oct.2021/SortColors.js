const sortColors = function(nums) {

    let pointerZero = 0, pointerTwo = nums.length - 1;
    for (let index = 0; index <= pointerTwo;) {

        if(nums[index] === 0) {
            [ nums[index], nums[pointerZero] ] = [ nums[pointerZero], nums[index] ];
            index++;
            pointerZero++;
        } else if(nums[index] === 2) {
            [ nums[index], nums[pointerTwo] ] = [ nums[pointerTwo], nums[index] ];
            pointerTwo--;
        } else {
            index++;
        }
    }

    return nums;
};

// console.log( sortColors([ 2, 0, 2, 1, 1, 0 ]) );
console.log( sortColors([ 1, 0, 2, 1, 1, 0 ]) ); // [ 0, 1, 2, 1, 1, 0 ] => [ 0, 1, 0, 1, 1, 2]
console.log( sortColors([2, 0, 1 ]) );
