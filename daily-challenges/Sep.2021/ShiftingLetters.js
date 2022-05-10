const shiftingLetters = function(string = '', shifts) {
    let total = shifts.reduce( (acc, e) => acc + e);
    const letters = [];

    for (let index = 0; index < string.length; index++) {
        let sum = string.charCodeAt(index) + ( total % 26 );

        console.log(sum, total);
        if( sum > 122) sum = 96 + (sum % 122);
        letters.push( sum );

        total -= shifts[index];
    }

    return String.fromCharCode(...letters);
};

console.log( shiftingLetters('ruu', [26, 9, 17]) );