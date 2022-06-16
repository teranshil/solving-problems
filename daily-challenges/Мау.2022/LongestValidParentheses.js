const longestValidParentheses = function(word) {
    if(word.length === 0 || word.length < 2) return 0;

    const stack = [];
    for (let index = 0; index < word.length; index++) {
        if(stack.length === 0) stack.push(index);
        else {
            const peak = stack[stack.length - 1];

            if(word[index] === ')' && word[peak] === '(') {
                stack.pop();
            } else {
                stack.push(index);
            }

        }
    }

    let max = 0;

    stack.push(word.length);
    for (let index = 0; index < stack.length - 1; index++) {
        max = Math.max(max, stack[index + 1] - stack[index] - 1);
    }

    return max;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
