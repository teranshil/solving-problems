const numDecodingsV1 = function(string = '') {

    let ways = 0;
    const numbers = string.split('').map(Number);

    for(let index = 0; index < numbers.length - 1; index++) {

        const numOne = numbers[index], numTwo = numbers[index + 1];

        if(numOne === 0) return 0;

        if(numTwo === 0 && numOne * 10 + numTwo <= 26) {
            ways += 1;
            index += 1;
        } else if(numTwo !== 0 && numOne * 10 + numTwo <= 26) {
            ways += 1;
        }

    }
    if(numbers.length === 1 && numbers[0] === 0) return ways;

    return ways + 1;
};

const numDecodingsV2 = function(string = '') {

    const dp = Array.from({ length: string.length + 1 }, () => 0);
    dp[0] = 1;
    dp[1] = string[0] === '0' ? 0 : 1;

    for( let index = 2; index <= string.length; index++ ) {

        const digit = parseInt(string[index -1]);
        const secondDigit = parseInt(string.substring(index - 2, index));

        if( digit >= 1 ) {
            dp[index] += dp[index - 1];
        }

        if(secondDigit >= 10 && secondDigit <= 26) {
            dp[index] += dp[index - 2];
        }
    }

    return dp[string.length];
}
console.log( numDecodingsV2("226") ); // dp[0] => 1, dp[1] => 1