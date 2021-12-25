
let nums = [ 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ], steps = 2;

console.error(findMax(nums, steps));
function findMax( nums, steps ) {

    let first = 0, second = 0;

    while( second < nums.length ) {

        if( nums[second] === 0 ) steps -= 1;
        if( steps < 0 ) {
            if( nums[first] === 0 ) steps += 1;

            first += 1;
        }

        second += 1;

    }

    return second - first;
}

let numbers = [ 200, 500, 50, 300, 200, 400 ];

console.log( findSum( numbers, 2 ));
function findSum( nums, steps ) {

    let first = 0, second = 0, sum = 0, max = 0;
    while( second < nums.length ) {

        sum += nums[ second ];

        if( steps <= 0 ) {
            steps += 1;
            sum -= nums[ first ];
            first++;
        }

        if(max < sum) max = sum;

        second += 1;
        steps -= 1;
    }

    return max;
}