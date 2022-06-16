const maxProduct = function(words) {

    const getStateFromWord = (word) => {
        let state = 0;
        for (let index = 0; index < word.length; index++) {
            let num = word.charCodeAt(index) - 'a'.charCodeAt(0);
            // console.log(num, 1 << (num), state |= (1 << (num)));

            state |= (1 << (num));
        }

        return state;
    }

    let states = Array.from({ length: words.length }, () => 0);
    let max = 0;

    for (let index = 0; index < words.length; index++) {
        states[index] = getStateFromWord(words[index]);
    }

    for (let outer = 0; outer < words.length; outer++) {
        for (let inner = outer + 1; inner < words.length; inner++) {

            if((states[outer] & states[inner]) === 0) {
                max = Math.max(words[outer].length * words[inner].length, max);
            }
        }
    }

    return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
