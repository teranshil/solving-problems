const find132pattern = function(nums) {
    const stack = [];
    let min = Number.MIN_VALUE;

    for (let index = nums.length - 1; index >= 0; index--) {
        const element = nums[index];
        while(stack.length !== 0 && stack[stack.length - 1] < element)
            min = stack.pop();

        if(stack.length === 0) stack.push(element);
        else {
            if(element < min) return true;
            else stack.push(min);
        }

    }

    return false;
};

const secondApproach = (nums) => {
    let secondMax = Number.MIN_SAFE_INTEGER;
    const monotonicStack = [];

    for (let index = nums.length - 1; index >= 0; index--) {

        if(nums[index] < secondMax) return true;

        while(monotonicStack.length !== 0 && nums[index] > monotonicStack[monotonicStack.length - 1]) {
            secondMax = Math.max(secondMax, monotonicStack.pop());
        }

        monotonicStack.push(nums[index]);
    }

    return false;
}

console.log(secondApproach([1,0,1,-4,-3]));
