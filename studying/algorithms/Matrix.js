const updateMatrix = function(grid) {

    const recursion = (x, y, counter = 0) => {



        recursion(x + 1, y, counter + 1);


    }

    const result = [];
    for (let outer = 0; outer < grid.length; outer++) {
        const temp = [];
        for (let inner = 0; inner < grid[outer].length; inner++) {
            grid[outer][inner] === 0
                    ? temp.push(0)
                    : temp.push( recursion(outer, inner));
        }
        result.push( temp );
    }

    return result;
};