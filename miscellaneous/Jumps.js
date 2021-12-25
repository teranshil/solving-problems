const jumps = (nums) => {

    const sequences = Array.from({ length: nums.length }).map( e => 0);
    const occurrences = new Map();
    let maxJumps = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < nums.length; index++) {
        let low = index, high = index + 1;

        if(occurrences.has(nums[low]) && occurrences.get(nums[low])[0] === 0 ) continue;
        if(!occurrences.has(nums[low])) occurrences.set(nums[low], [ 0 ]);

        while(high < nums.length) {

            if(nums[high] > nums[low]) {
                const jumps = occurrences.get(nums[low])[0];
                occurrences.get(nums[low])[0] += 1;
                if(maxJumps < jumps) maxJumps = jumps;

                low = high;
            }
            else if(nums[high] === nums[low])
                occurrences.get(nums[low]).push( sequences[index] * -1);

            high += 1;
        }
    }

    console.log( maxJumps === Number.MIN_SAFE_INTEGER ? 0 : maxJumps );
    Array.from(occurrences.entries([key, value]))
}

jumps([9, 9, 8, 7, 6, 5, 7, 6, 5, 7, 6, 5, 4, 6, 5, 7, 7, 8, 8, 7, 6, 6, 6, 6, 5, 4, 4, 5, 4, 3, 7]);