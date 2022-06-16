const twoSum = function(numbers, target) {

    let left = 0, right = numbers.length - 1;

    while(left < right) {
        const sum = numbers[left] + numbers[right];

        if(sum === target) return [left + 1, right + 1];

        sum > target ? right -= 1 : left += 1;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));
