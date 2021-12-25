const shortestPathBinaryMatrix = function(grid) {

    const rows = grid.length, cols = grid[rows - 1].length;
    const directions = [ [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1] ];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [];

    if(grid[0][0] === 1) return -1;

    queue.push([0, 0]);
    visited[0][0] = true;

    let level = 1;
    while(queue.length > 0) {


        const size = queue.length;
        for (let index = 0; index < size; index++) {
            const node = queue.shift();

            if(node[0] === rows - 1 && node[1] === cols - 1) return level;
            for (const direction of directions) {
                const x = node[0] + direction[0];
                const y = node[1] + direction[1];

                if(grid[x] === undefined || grid[x][y] === undefined) continue;
                if(visited[x][y] || grid[x][y] === 1) continue;

                visited[x][y] = true;
                queue.push([x, y]);
            }
        }

        level++;
    }

    return -1;
};

// const grid = [[1,0,0],[1,1,0],[1,1,0]];
// const grid = [[0,1,0],[1,0,0],[1,1,0]];
// const grid = [[0,0,0],[1,1,0],[1,1,0]];
// const grid = [ [0,1],[1,0] ];

console.log( shortestPathBinaryMatrix(grid) );