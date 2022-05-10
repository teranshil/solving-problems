const minStartValue = function(nums) {

    let min = Number.MAX_SAFE_INTEGER, sum = 0;
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
        if(sum < 0 && sum < min) min = sum;
    }

    return min === Number.MAX_SAFE_INTEGER ? 1 : Math.abs(min) + 1;
};

console.log( minStartValue([-3,2,-3,4,2]) );
console.log( minStartValue([1, 2]) );
console.log( minStartValue([1, -2, -3]) );
