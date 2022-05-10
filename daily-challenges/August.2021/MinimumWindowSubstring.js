// unsuccessful
const minWindow = (string = '', search) => {

    let low = 0, high = 0, count = 0, last = 0, max = '';

    let original = new Map();
    search.split('').forEach( char =>  original.has(char) ? original.set(char, original.get(char) + 1) : original.set(char, 1))

    while(high <= string.length) {
        const char = string[high];

        if( original.has(char) && original.get(char) !== 0) {
            count += 1;
            original.set(char, original.get(char) - 1);
            if( count === (search.length > 1 ? 2 : 1) ) last = high;
        }
        if(count === 0) {
            low += 1;
            high += 1;
            continue;
        }

        if( count !== search.length ) {
            high += 1;
            continue;
        }

        if( max === '' || max.length > high - low ) max = string.substring(low, high + 1);
        if(max.length === search.length) return max;

        high = last;
        low = high;
        count = 0;
        search.split('').forEach( char =>  original.has(char) ? original.set(char, original.get(char) + 1) : original.set(char, 1));
    }

    return max;
};

console.log( minWindow('bba', 'ba') );