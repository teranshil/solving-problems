const deleteAndEarn = function(nums, start = 0) {

    if(start >= nums.length) return 0;
    while(nums[start] === nums[start + 1]) start += 1;

    const remainders = nums.filter( element => (element !== nums[start] - 1 && element !== nums[start] + 1));
    const sum = remainders.reduce( (acc, element) => acc + element, 0);

    return Math.max( sum, deleteAndEarn(nums, start + 1) );
};

const inputs = [
    [1,1,1,2,4,5,5,5,6], [3,3,3,4,2], [3,4,2], [2,2,3,3,3,4] ];
inputs.forEach(e => console.log( deleteAndEarn(e) ));