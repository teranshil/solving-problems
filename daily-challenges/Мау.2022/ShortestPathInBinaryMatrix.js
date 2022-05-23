const shortestPathBinaryMatrix = function(grid) {
    const visited = new Map();
    const directions = [ [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1] ];

    const search = (x = 0, y = 0) => {
        if(x >= grid.length || x < 0 || y >= grid[0].length || y < 0 || grid[x][y] === 1) return -1;
        if(visited.has(x + '' + y)) return visited.get(x + '' + y);

        if(x === grid.length - 1 && y === grid[0].length - 1) return 1;

        let min = Number.MAX_SAFE_INTEGER;
        for (const direction of directions) {

        }
        // for (let outer = x - 1; outer <= x + 1; outer++) {
        //     for (let inner = y - 1; inner <= y + 1; inner++) {
        //         const result = search(outer, inner);
        //
        //         visited.set(x + '' + y, result);
        //         if(result !== -1) {
        //             min = Math.min(min, result + 1);
        //         }
        //     }
        // }

        visited.set(x + '' + y, min);
        return min === Number.MAX_SAFE_INTEGER ? -1 : min;
    }

    return search();
};

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]]));
