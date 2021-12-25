const reverseBits = function(number) {

    const bits = `${"0".repeat(32 - number.toString(2).length)}${number.toString(2)}`.split('').reverse().join('');

    return parseInt(bits, 2);
};

console.log( reverseBits('11111111111111111111111111111101') );