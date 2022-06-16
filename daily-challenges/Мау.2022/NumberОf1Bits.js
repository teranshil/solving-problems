const hammingWeight = function(binary) {
    binary = binary.toString(2);

    let count = 0;
    for (let index = 0; index < binary.length; index++) {
        if(binary[index] === '1') count++;
    }

    return count;
};

console.log(hammingWeight(11));
// console.log(hammingWeight('11111111111111111111111111111101'));
// console.log(hammingWeight('00000000000000000000000010000000'));
