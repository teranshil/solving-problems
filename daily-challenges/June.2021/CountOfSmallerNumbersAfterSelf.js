const countSmaller = function(nums) {
    let array = [], map = new Map(); // 5 -> [2, 3]
    for(let outer = 0; outer < nums.length; outer++) {
        
        array[outer] = 0;
        for (let inner = outer + 1; inner < nums.length; inner++) {
            if(nums[outer] > nums[inner]) array[outer] += 1;
        }
    }

    return array;
};
console.log( countSmaller([-1] ));