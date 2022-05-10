/** Approach One - two pointers */
function threeSumClosestPointers( nums, target) {

    nums = nums.sort((a, b) => a - b);
    let closestDistance = Number.MAX_SAFE_INTEGER, maxSum = [];

    for(let index = 0; index < nums.length - 2; index++) {

        let low = index + 1, high = nums.length - 1;
        while (low < high) {
            let sum = nums[index] + nums[low] + nums[high];
            let distance = sum < 0 ? Math.abs(target - sum) : Math.abs(sum - target);

            if( distance < 0) console.log(nums[index], nums[low], nums[high], 'distance: ' + distance);
            if( closestDistance > distance ) {
                closestDistance = distance;
                maxSum = sum;
            }

            sum < target ? low += 1 : high -= 1;
        }
    }

    return maxSum;
}
console.log( threeSumClosestPointers( [-1, 2, 1, 4], 1) );



