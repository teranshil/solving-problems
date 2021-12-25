const canReorderDoubled = function(array) {

    const map = new Map();
    array = array.sort(( a, b ) => Math.abs(a) - Math.abs(b));
    array.forEach( e => { map.has(e) ? map.set(e, map.get(e) + 1) :  map.set(e, 1) } );

    for( const key of array ){
        if( map.get(key) === 0) continue;

        if( !map.has(key * 2) || map.get(key * 2) === 0 ) return false;

        map.set(key * 2, map.get(key * 2) - 1);
        map.set(key, map.get(key) - 1);
    }

    return true;
};

console.log( canReorderDoubled([1,2,4,16,8,4]) ); // -2, 2, 4, -4