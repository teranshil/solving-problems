const minFlipsMonoIncr = function(string) {

    let index = 0, zeroes = 0, ones = 0;

    while(index < string.length && string[index] === '0') index += 1;

    for( ;index < string.length; index++ ) {

        string[index] === '0' ? zeroes += 1 : ones += 1;

        if( zeroes > ones) zeroes = ones;
    }

    return zeroes;
};

console.log( minFlipsMonoIncr( "0101100011") );