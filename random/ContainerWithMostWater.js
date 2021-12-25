const maxArea = function(heights) {

    const backtracking = (start = 0, current = -1) => {
        for (let index = start; index < heights.length; index++) {
            backtracking(index + 1, heights[index] );

        }

    }

};
