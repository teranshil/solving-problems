const divide = function(dividend, divisor) {
    const helper = (current) => {
        if(current < divisor) return 0;

        let count = 1;
        let sum = divisor;

        while((sum + sum) <= current) {
            sum = sum + sum;
            count = count + count;
        }

        return count + helper(current - sum);
    }

    let isNegative = false, count = 0;

    if((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        isNegative = true;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if(divisor === 0 || dividend < divisor) return 0;

    count = helper(dividend);

    if(count > Number.MAX_VALUE) {
        return isNegative ? Number.MIN_VALUE : Number.MAX_VALUE;
    } else {
        return isNegative ? count * -1 : count;
    }
};

console.log(divide(120, 2));
console.log(divide(4, 2));
console.log(divide(-2147483648, -1));
