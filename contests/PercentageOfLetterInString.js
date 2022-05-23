const percentageLetter = function(word, letter) {
    let occurrences = 0;

    for (let index = 0; index < word.length; index++) {
        if(word[index] === letter) occurrences++;
    }

    if(occurrences === 0) return 0;

    return Math.floor(occurrences / word.length * 100);
};

console.log(percentageLetter('foobar', 'o'));
console.log(percentageLetter('jjjj', 'k'));
