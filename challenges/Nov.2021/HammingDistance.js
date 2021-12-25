const hammingDistance = function(x, y) {
    const one = parseInt(x).toString(2), second = parseInt(y).toString(2);

    let index = 0, distance = -1;
    console.log( one, second );
    while (index < one.length || index < second.length) {
        if( (one[one.length - index - 1] ?? '0') !== (second[second.length - index - 1] ?? '0') ) {
            if(distance !== -1) return Math.abs((index + 1) - distance);
            distance = index + 1;
        }
        index += 1;
    }

    return Math.max(one.length, second.length) - (distance -1);
};

// console.log( hammingDistance(1, 4) );
// console.log( hammingDistance(0, 1) );
// console.log( hammingDistance(3, 1) );
// console.log( hammingDistance(93, 73) );
console.log( hammingDistance(4, 2) );
