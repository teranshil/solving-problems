const groupAnagrams = function(words) {
    const uniques = new Map();

    for( const word of words ) {
        const ordered = word.split('').sort((a, b) => a.localeCompare(b)).join('');

        if(!uniques.has( ordered )) uniques.set(ordered, []);
        uniques.get(ordered).push(word);
    }

    return Array.from( uniques.values() );
};

const map = new Map();

const input = [""];
console.log( groupAnagrams( input ) );