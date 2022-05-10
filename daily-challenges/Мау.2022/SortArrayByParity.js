const sortArrayByParity = function(nums = []) {
    const queue = [];
    for (let index = 0; index < nums.length; index++) {
        nums[index] % 2 == 0 ? queue.unshift(nums[index]) : queue.push(nums[index]);
    }

    return queue;
};