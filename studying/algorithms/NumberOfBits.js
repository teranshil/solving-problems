const hammingWeight = function(number) {
    return number.toString(2).split('').reduce( (acc, e) => {
        acc += e === '1' ?  1 : 0;
        return acc;
    }, 0);

};

console.log( hammingWeight(0o0000000000000000000000000001011));