const lengthOfLastWord = function(string) {

    let size = 0, index = string.length - 1;
    let lastChar = string[index];

    while(true) {
        if(string[index] !== ' ') size += 1;
        if( (string[index] !== ' ' && string[index - 1] === ' ') || index === 0) return size;

        lastChar = string[index];
        index--;
    }
};

console.log( lengthOfLastWord("moon"));