const hasAllCodes = function(binaries, number) {
    let count = Math.pow(2, number);
    const uniques = new Set();
    const stack = [];
    stack.toString = function() {
        return this.join('');
    }

    let start = 0, end = number - 1;

    while(start <= end && start < binaries.length) {
        stack.push(binaries[start++]);
    }

    uniques.add(stack.toString());
    while (end < binaries.length) {
        stack.shift();
        stack.push(binaries[end]);
        uniques.add(stack.toString());
        end++;
    }

    console.log(uniques);
    return uniques.size === count;
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("0110", 2));
