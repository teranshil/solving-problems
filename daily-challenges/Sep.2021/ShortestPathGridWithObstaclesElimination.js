const shortestPath = function(grid, eliminateObstacles) {

    let max = Number.MAX_SAFE_INTEGER;
    const searchPath = (x = 0, y = 0, { steps = 0, obstacles = 0 } = { steps: 0, obstacles: 0 }) => {

        if(grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === -1) return null;
        if(eliminateObstacles < obstacles || max < steps) return null;
        if(x === grid.length - 1 && y === grid[x].length - 1) {
            if(eliminateObstacles >= obstacles) max = Math.min(max, steps);
            return null;
        }
        if(grid[x][y] === 1) obstacles += 1;

        const cellValue = grid[x][y];
        grid[x][y] = -1;

        searchPath(x + 1, y, { steps: steps + 1, obstacles });
        searchPath(x - 1, y, { steps: steps + 1, obstacles });
        searchPath(x, y + 1, { steps: steps + 1, obstacles });
        searchPath(x, y - 1, { steps: steps + 1, obstacles });

        grid[x][y] = cellValue;
        return { steps, obstacles };
    }

    searchPath();
    return max === Number.MAX_SAFE_INTEGER ? -1 : max;
};
const grid = [ [0,0,0], [1,1,0], [0,0,0], [0,1,1], [0,0,0] ];
// const grid = [ [0,1,1], [1,1,1], [1,0,0] ];

console.log( shortestPath(grid, 1));

/**
 * Associate every cell with minimum count obstacles needed to reach that cell
 *
 * **/
const shortestPathOptimized = (grid, obstaclesCount) => {

    const rows = grid.length;
    const cols = grid[rows - 1].length;

    const queue = [];
    const obstacles = Array.from({ length: rows }, () => Array(cols).fill(0));
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];

    queue.push([ 0, 0, grid[0][0] ]);
    obstacles[0][0] = grid[0][0];

    let level = 1;
    while(queue.length > 0) {
        const size = queue.length;
        for (let index = 0; index < size; index++) {

            const head = queue.shift();

            if(head[0] === rows - 1 && head[1] === cols - 1) return level - 1;

            const currentObstacleCount = head[2];
            for (const direction of directions) {
                const x = head[0] + direction[0];
                const y = head[1] + direction[1];

                if(grid[x] === undefined || grid[x][y] === undefined) continue;

                const oldObstacleCount = obstacles[x][y];
                const newObstacles = currentObstacleCount + grid[x][y];

                if(!visited[x][y] && newObstacles <= obstaclesCount) {
                    queue.push([x, y, newObstacles]);
                    obstacles[x][y] = newObstacles;
                    visited[x][y] = true;
                }

                if(oldObstacleCount > newObstacles && newObstacles <= obstaclesCount) {
                    queue.push([x, y, newObstacles]);
                    obstacles[x][y] = newObstacles;
                    visited[x][y] = true;
                }
            }
        }

        level++;
    }

    return -1;
}

console.log( shortestPathOptimized(grid, 1) );
