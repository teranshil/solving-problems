// #303 Leetcode
const NumArray = function(nums) {

    NumArray.prototype.calculate = Array.from({ length: nums.length + 1 }, () => 0);

    for( let index = 0; index < nums.length; index++) {
        this.calculate[index + 1] = this.calculate[index] + nums[index];
    }
};

NumArray.prototype.sumRange = function(left, right) {

    return this.calculate[right + 1] - this.calculate[left];
};

const array = [ -2, 0, 3, -5, 2, -1 ];
const numArray = new NumArray(array);
console.log( numArray.sumRange(2, 5) );

