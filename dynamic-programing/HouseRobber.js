// const rob = function(nums) {
//     let rob1 = 0, rob2 = 0;
//
//     for (const num of nums) {
//         let temp = Math.max(num + rob1, rob2);
//         rob1 = rob2;
//         rob2 = temp;
//     }
//
//     return rob2;
// };

// console.log( rob([2,7,9,3,1]) );

/** not optimized way **/
const second = function( nums ) {

    if(nums === null || nums.length === 0) return 0;
    if(nums.length === 2) return Math.max(nums[0], nums[1]);


    const dp = Array.from({ length: nums.length }).map(e => 0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let index = 2; index < nums.length; index++) {
        dp[index] = Math.max(nums[index] + dp[index - 2], dp[index - 1]);
    }
}

const rob = function(houses) {



}

console.log( rob([2,7,9,3,1]) );