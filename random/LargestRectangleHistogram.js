const largestRectangleArea = function(heights) {

    let maxArea = 0;
    for (let index = 0; index < heights.length; index++) {
        let width = 1, start = index + 1, end = index - 1;
        while (start < heights.length && heights[start++] >= heights[index]) width++;
        while (end >= 0 && heights[end--] >= heights[index]) width++;

        maxArea = Math.max(maxArea, heights[index] * width);
    }

    return maxArea;
};

console.log( largestRectangleArea([2, 1, 5, 6, 2, 3]) );
console.log( largestRectangleArea([2,4] ) );

const largestRectangleAreaOptimized = function(heights) {

    const stack = [];

}
