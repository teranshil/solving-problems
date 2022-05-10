const judgeSquareSum = function(number) {
    let rest = Math.floor( Math.sqrt(number) ), start = 0;

    while(start <= rest) {
        const sum = start ** 2 + rest ** 2;
        if(sum === number ) return true;

        sum > number ? rest-- : start++;
    }

    return false;
};

console.log( judgeSquareSum( 1000 ) );