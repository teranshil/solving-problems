const frequencySort = function(string) {
    const frequencies = new Map();
    for (const character of string.split('')) {
        const frequency = frequencies.get(character) ?? 0;
        frequencies.set(character, frequency + 1);
    }

    let output = '';
    for (const entry of [...frequencies.entries()].sort(([first, a], [second, b]) => b - a)) {
        let [character, frequency] = entry;
        while (frequency > 0) {
            output += character;
            frequency--;
        }
    }

    return output;
};

console.log( frequencySort('tree') );


const frequencyBucketSort = function(string) {


}
