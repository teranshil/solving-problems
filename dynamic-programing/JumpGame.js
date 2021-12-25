/** bruteforce way of solving **/
const canJumpBruteForce = function (nums) {
    const recursion = (start = 0) => {
        if (start === nums.length - 1) return true;
        if (start >= nums.length) return false;

        for (let index = 1; index <= nums[start]; index++) {
            if( recursion(start + index) ) return true;
        }
    }

    return recursion() || false;
}

// console.log( canJumpBruteForce( [2, 3, 1, 1, 4]) );
// console.log( canJumpBruteForce( [3, 2, 1, 0, 4]) );

/** bruteforce way optimized with cache **/
const canJumpOptimized = function (nums) {
    const cache = Array.from({ length: nums.length }).map(e => true);
    const recursion = (start = 0) => {
        if (start === nums.length - 1) return true;
        if (start >= nums.length) return false;

        if(!cache[start]) return false;

        for (let index = 1; index <= nums[start]; index++) {
            if( recursion(start + index) ) return true;
        }

        cache[start] = false;
    }

    return recursion() || false;
}

/** greedy solution **/
const canJumpGreedy = (nums) => {
    let goal = length - 1;

    // [2,3,0,1,4]
    for(let index = nums.length - 1; index >= 0; index--) {
        if(index + nums[index] >= goal) goal = index;
    }

    return goal === 0;
}



