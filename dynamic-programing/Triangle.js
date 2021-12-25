const minimumTotal = (triangle) => {

    const dp = Array.from({ length: triangle.length + 1 }).map(e => 0);

    for (let index = triangle.length -1 ; index >= 0 ; index--) {
        for (let inner = 0; inner < triangle[index].length; inner++) {
            dp[inner] = triangle[index][inner] + Math.min(dp[inner], dp[inner + 1]);
        }
    }

    return dp[0];
}
console.log( minimumTotal([ [2], [3,4], [6,5,7], [4,1,8,3] ]));

/** without using dynamic programming, inefficient way **/
const minimumTotalSecondWay = function(triangle) {

    let min = Number.MAX_SAFE_INTEGER;
    const backtracking = (number = 0, start = 0, sum = 0) => {

        if(number > triangle.length - 1) return (min = Math.min(min, sum));

        for (let index = start; index <= start + 1 && index < triangle[number].length; index++) {
            backtracking(number + 1, index, sum + triangle[number][index]);
        }
    }

    backtracking();
    return min;
};
// console.log( minimumTotalSecondWay([ [-10] ]) );