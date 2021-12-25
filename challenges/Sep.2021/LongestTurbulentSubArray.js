/** Leetcode 978 */
const maxTurbulenceSize = function(array) {

    let start = 0, end = 0, max = 0;

    if(array.length < 2) return array.length;

    const isTurbulent = (index) => {
        //first - valley, second - mountain
        return ( (array[index - 1] > array[index] && array[index] < array[index + 1]) ||
            (array[index - 1] < array[index] && array[index] > array[index + 1]) );
    }

    while(start < array.length - 1) {
        if(array[start] === array[start + 1]) {
            start++;
            continue;
        }

        end = start + 1;

        while (end + 1 < array.length && isTurbulent(end)) {
            end++;
        }

        max = Math.max(max, end - start + 1);
        start = end;
    }

    return max;
};

console.log( maxTurbulenceSize([9, 9]) );