/* In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x.
*  On every iteration we have two paths we can take subtract from begging or from end. Every node in the decision tree we always divide its on two children.
* */

const minOperationsBacktracking = function(nums, x) {
    const backtracking = (array, number) => {
        if(number === 0) return 0;
        if(number < 0 || array.length === 0) return Number.MAX_SAFE_INTEGER;

        let min = Number.MAX_SAFE_INTEGER;

        const first = array.shift();
        min = Math.min(min, backtracking(array, number - first) + 1);
        array.unshift(first);

        const last = array.pop();
        min = Math.min(min, backtracking(array, number - last) + 1);
        array.push(last);

        return min;
    }

    const result = backtracking(nums, x);

    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};

/* find the longest consecutive array where sum = total - target */
const minOperations = (nums, target) => {


}

// console.log(minOperations([8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309], 134365)); // -1
// console.log(minOperations([1,1], 3)); // -1
// console.log(minOperations([1,1,3,2,5], 5)); // 1
// console.log(minOperations([1,1,4,2,3], 5)); // 2
// console.log(minOperations([5,6,7,8,9], 4)); // -1
// console.log(minOperations([3,2,20,1,1,3], 10)); // 5


