function tripletsSum( nums ) {

    nums = nums.sort( (a, b) => a - b);
    let result = [];
    for (let index = 0; index < nums.length - 2; index++) {

        let low = index + 1, high = nums.length - 1;
        let contemplate = 0 - nums[index];

        if(index > 0 && nums[index] === nums[index - 1]) continue;
        while(low < high) {
            if( nums[low] + nums[high] === contemplate ) {

                result.push([ nums[low], nums[high], nums[index] ])

                while(low < high && nums[low] === nums[low + 1]) low++;
                while(low < high && nums[high] === nums[high - 1]) high--;

                low += 1;
                high -= 1;
            } else if( contemplate < nums[low] + nums[high]) {
                high -= 1;
            } else low += 1;
        }
    }

    return result;
}
console.log( tripletsSum([ 0, 0, 0, 0, 0 ]) );
