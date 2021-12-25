/** recursive way **/
const isUgly = function(n) {
    if(n === 0) return false;

    const factors = [ 2, 3, 5 ];
    const recursion = (number) => {
        if(number % 1 !== 0) return false;
        if(factors.includes(number) || number === 1) return true;

        for (const factor of factors) {
            if(number % factor !== 0) continue;
            if( recursion(number / factor) ) return true;
        }
    }

    return recursion(n) || false;
};
console.log( isUgly(1) );

const isUglyIterative = function (number) {
    if(number === 0) return false;
    const factors = [ 2, 3, 5 ];

    for (const factor of factors) {
        while (number % factor === 0) {
            number = number / factor;
        }
    }

    return number === 1;
}

console.log( isUglyIterative(15) );