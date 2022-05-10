const maxPower = function(input) {

    if(input.length === 0) return input.length;

    let max = 1, consecutive = 1;
    for (let index = 1; index < input.length; index++) {
        consecutive = input[index - 1] === input[index] ? consecutive + 1 : 1;

        max = Math.max(max, consecutive);
    }

    return max;
};

console.log( maxPower('hooraaaaaaaaaaay') );
