const numberOfSteps = function(num) {
    let steps = 0;
    while (num !== 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        steps++;
    }

    return steps;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));

// 11100 -> 7 01100 -> 6 11000 -> 3
