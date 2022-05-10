const removeDuplicates = function(string, k) {
    const stack = [];

    for (let index = 0; index < string.length; index++) {
        if(stack.length === 0 || stack[stack.length - 1].char !== string[index]) {
            stack.push({ char: string[index], frequency: 1 });
            continue;
        }

        stack[stack.length - 1].frequency += 1;

        if (stack[stack.length - 1].frequency === k) {
            stack.pop();
        }

    }

    return stack.reduce((acc, letter) => acc + letter.char.repeat(letter.frequency), '');
};

console.log(removeDuplicates('abcd', 2));
console.log(removeDuplicates('deeedbbcccbdaa', 3));
console.log(removeDuplicates('pbbcggttciiippooaais', 2));