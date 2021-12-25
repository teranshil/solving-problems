
const search = (nums, target) => {

    const binary = (low, high) => {

        const middle = Math.floor((high + low) / 2 );
        if(low > high) return -1;

        if( nums[middle] === target) return middle;
        if( nums[middle] > target ) return binary(low, middle - 1);
        if( nums[middle] < target ) return binary(middle + 1, high);
    }

    return binary(0, nums.length -1);
}

console.log( search([ -1, 0, 3, 5, 9, 12 ], -1) );