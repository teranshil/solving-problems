const singleNumber = function(nums) {
    const uniques = new Set();

    for (let index = 0; index < nums.length; index++) {
        if(uniques.has(nums[index])) uniques.delete(nums[index]);
        else uniques.add(nums[index]);
    }

    return [...uniques.keys()];
};

console.log( singleNumber([1,2,1,3,2,5]) );
