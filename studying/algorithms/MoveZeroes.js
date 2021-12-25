const moveZeroes = function(nums) {

    const array = [];
    let index = 1;

    while ( index < nums.length && index++) {
        if( nums[index] !== 0 ) array.push(nums[index]);
    }
    while(array.length < nums.length) array.push(0);

    return array;
};

const moveZeroesSecond = function(nums) {

    let index = 0, second = 0, counter = 0;
    while(second < nums.length) {
        if(nums[second] !== 0) {
            [ nums[index], nums[second] ] = [ nums[second], nums[index] ];
            index++;

        } else counter++;

        second++
    }

    return nums;
};


console.log( moveZeroesSecond([ 0, 1, 0, 3, 12 ]));