
function twoSum( nums, target ){

    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
        let complement = target - nums[index];

        if( map.has(complement) ) return [ index, map.get(complement) ];

        map.set(nums[index], index);
    }
}

let result = twoSum( [ -9, 30, 21, 17 ], 51);
console.log( result );