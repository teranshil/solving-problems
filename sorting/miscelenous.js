
const sort = (array = []) => {
    if(array.length < 2) return array;

    const [ first, ...rest ] = array;

    return [
        ...sort(rest.filter( e => first >= e)),
        first,
        ...sort(rest.filter( e => first < e))
    ];
}

console.log( sort( [3, 2, 1, 3, 4]));