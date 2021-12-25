/**
 * Original solution by me Leetcode
 * */
const combine = function(boundary, k) {
    let temp = [];
    const result = [];

    const backtracking = (startIndex, n, k) => {
        if(temp.length === k) {
            return result.push([...temp]);
        }

        for (let index = startIndex; index <= n; index++) {
            temp.push(index)
            backtracking(index + 1, n, k)
            temp.pop()
        }
    }

    backtracking(1, boundary, k);
    return result;
}
console.log(combine(4, 2));


const combinations = (elements = []) => {

    if(elements.length === 0) return [ [] ];

    const firstElement = elements[0];
    const rest = elements.slice(1);
    const combsWithoutFirst = combinations( rest );
    const combsWithFirst = [];

    combsWithoutFirst.forEach( comb => {
      combsWithFirst.push( [...comb, firstElement] );
    });

    return [ ...combsWithFirst, ...combsWithoutFirst ];
};

console.log( combinations([1, 2, 3]));

/** combination solution with stack **/
const combinationsStack = (elements = [], k, stack = []) => {

};
