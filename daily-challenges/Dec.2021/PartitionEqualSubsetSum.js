const canPartition = function(nums) {
    const sum = nums.reduce((acc, number) => acc + number);
    if(sum % 2 !== 0) return false;

    const target = sum / 2, cache = [];
    const search = (start = 0, sum = 0, elements = []) => {

        if(sum === target) return true;
        if(sum > target) return false;

        for (let index = start; index < nums.length; index++) {
            elements.push(index);
            if( search(index + 1, sum + nums[index], elements) ) {
                return elements;
            }

            elements.pop();
        }
    }

    const result = search();
    return result !== undefined;
};

const canPartitionOptimized = function(nums) {
    const sum = nums.reduce((acc, number) => acc + number);
    if (sum % 2 !== 0) return false;

    let uniques = new Set([0]);
    const target = sum / 2;

    for (let index = nums.length - 1; index >= 0 ; index--) {
        const copy = new Set();
        for (const value of uniques.values()) {
            copy.add(value + nums[index]);
            copy.add(value);
        }

        uniques = copy;
    }

    return uniques.has(target);
};

console.log( canPartitionOptimized([1,5,11,5,2]) );
