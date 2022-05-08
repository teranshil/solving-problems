const findUnsortedSubarray = function(nums) {
    return naive(nums);
};

const optimized = (nums) => {
    let monotonic = [{ value: 5, index: 0 }];
    let left = nums.length - 1;

    for (let index = 0; index < nums.length;) {

        if(monotonic.length === 0) {
            monotonic.push(nums[index]);
            index++;
        } else {
            if(nums[monotonic.length - 1] > nums[index]) {
                left = Math.min(left, nums[index]);
                monotonic.pop();
            } else {
                monotonic.push(nums[index]);
                index++;
            }
        }
    }

    monotonic = [];
    let right = nums.length - 1;

    for (let index = nums.length -1; index >= 0;) {
        if(monotonic.length === 0) {
            monotonic.push(nums[index]);
            index--;
        } else {
            if(nums[monotonic.length - 1] < nums[index]) {
                right = Math.max(right, nums[index]);
                monotonic.pop();
            } else {
                monotonic.push(nums[index]);
                index--;
            }
        }
    }


    if(left >= right) return 0;
    else return right - left + 1;
}

const naive = (nums = []) => {

    const sorted = nums.concat().sort((a, b) => a - b);
    let start = 0, end = 0, isStartFound = false;

    for (let index = 0; index < nums.length; index++) {

        if(sorted[index] !== nums[index]) {
            if(!isStartFound) {
                isStartFound = true;
                start = index;
            }

            end = index;
        }
    }

    if(end === 0) return 0;

    return end - start + 1;
}

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));
console.log(findUnsortedSubarray([1,2,3,4]));
console.log(findUnsortedSubarray([1]));