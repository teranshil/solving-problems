const integerBreak = function(number) {

    const cache = {};
    let max = 0;
    const backtracking = (sum = 0, numbers = []) => {
        if(sum > number) return 1;
        if( (number - sum) in cache) return cache[(number - sum)];

        if(sum === number) {
            const product = numbers.reduce( (acc, num) => acc * num);
            max = Math.max(max, product);
            return product;
        }

        for (let index = 1; index <= Math.ceil(number / 2); index++) {
            if(sum > number) return cache[(number - sum)];

            numbers.push(index);
            const product = backtracking(sum + index, numbers);
            cache[(number - sum)] = Math.max(cache[(number - sum)], product, index);
            numbers.pop();
        }

        return cache[(number - sum)];
    }

    backtracking();
    return max;
};

console.log( integerBreak(3) );
console.log( integerBreak(6) );
