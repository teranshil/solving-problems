const orderlyQueue = function(string = '', moves) {
    if(moves === 0) {
        return string;
    } else if(moves > 1) {
        return string.split('').sort((a, b) => a.localeCompare(b)).join('');
    } else if(moves === 1) {
        let temp = string;
        for (let index = 1; index < string.length; index++) {
            const reordered = string.substring(index) + string.substring(0, index)
            if(temp.localeCompare(reordered) > 0) {
                temp = reordered;
            }
        }
        return temp;
    }

    return string;
}

console.log( orderlyQueue('bac', 1) );