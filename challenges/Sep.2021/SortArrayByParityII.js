const sortArrayByParityII = function(nums) {

    let incorrectOdds = [], incorrectEvens = [];

    for (let index = 0; index < nums.length; index++) {

        if(index % 2 === 0 && nums[index] % 2 !== 0) {
            incorrectOdds.push(index);

            if(incorrectEvens.length !== 0 && incorrectOdds.length !== 0) {
                const odd = incorrectOdds.shift(), even = incorrectEvens.shift();
                [ nums[odd], nums[even] ] = [ nums[even], nums[odd] ];
            }
        } else if(index % 2 !== 0 && nums[index] % 2 === 0) {
            incorrectEvens.push(index);

            if(incorrectEvens.length !== 0 && incorrectOdds.length !== 0) {
                const odd = incorrectOdds.shift(), even = incorrectEvens.shift();
                [ nums[odd], nums[even] ] = [ nums[even], nums[odd] ];
            }
        }
    }

    return nums;
};

const nums = [4,2,5,7];
console.log(sortArrayByParityII(nums));
console.log(sortArrayByParityII([2, 3]));


const sortArrayByParityIISecond = function(nums) {
    let pointerEven = 0, pointerOdd = 1;

    while(pointerEven < nums.length && pointerOdd < nums.length) {

        while(pointerEven < nums.length && nums[pointerEven] % 2 === 0) {
            pointerEven += 2;
        }

        while(pointerOdd < nums.length && nums[pointerOdd] % 2 === 1) {
            pointerOdd += 2;
        }

        if(pointerEven < nums.length && pointerOdd < nums.length) {

            [ nums[pointerEven], nums[pointerOdd] ] = [ nums[pointerOdd], nums[pointerEven] ];
        }
    }

    return nums;
}


console.log( sortArrayByParityIISecond([4,2,5,7]) );
