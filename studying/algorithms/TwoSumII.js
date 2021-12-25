const twoSum = function(numbers, target) {
    let low = 0, high = numbers.length -1;

    while (low < high) {
        const sum = numbers[low] + numbers[high];

        if(sum === target) return [low + 1, high + 1];
        sum > target ? high -= 1 : low += 1;
    }
};

console.log( twoSum([2, 7, 11, 15], 9) );