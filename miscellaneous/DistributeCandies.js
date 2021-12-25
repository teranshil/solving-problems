const distributeCandies = (candyType) => {

    if( candyType.length === 0 ) return 0;

    let current = 0, half = candyType.length / 2;
    const uniqueTypes = new Set();

    while( current < candyType.length && uniqueTypes.size < half) {

        uniqueTypes.add( candyType[current] );
        current += 1;
    }

    return uniqueTypes.size;
};

console.log( distributeCandies([ 1, 1, 2, 3 ]) );