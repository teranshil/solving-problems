const uniquePathsWithObstacles = function(obstacleGrid) {
    const cache = new Map(), directions = [ [1, 0], [0, 1]];

    const backtracking = (x = 0, y = 0) => {
        if(obstacleGrid[x][y] === 1) return 0;
        if(cache.has(x + '' + y)) return cache.get(x + '' + y);

        if(x === obstacleGrid.length - 1 && y === obstacleGrid[0].length - 1) return 1;

        let count = 0;
        for (const direction of directions) {
            const nextX = x + direction[0];
            const nextY = y + direction[1];

            if(nextX < 0 || nextY < 0 || nextX >= obstacleGrid.length || nextY >= obstacleGrid[0].length) continue;

            count += backtracking(nextX, nextY);
        }

        cache.set(x + '' + y, count);
        return count;
    }

    cache.set('00', backtracking());
    return cache.get('00') || 0;
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
// console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
// console.log(uniquePathsWithObstacles([[1]]));
// console.log(uniquePathsWithObstacles([[0]]));

const unique = function(obstacleGrid) {

    const queue = [], directions = [ [1, 0], [0, 1]];
    let uniques = 0;

    queue.push([0, 0]);

    while (queue.length !== 0) {
        const size = queue.length;

        for(let index = 0; index < size; index++) {
            const [x, y] = queue.pop();

            if(x === obstacleGrid.length - 1 && y === obstacleGrid[0].length - 1) {
                uniques++;
                continue;
            }

            for (const direction of directions) {
                const nextX = x + direction[0];
                const nextY = y + direction[1];

                if(nextX < 0 || nextY < 0 || nextX >= obstacleGrid.length || nextY >= obstacleGrid[0].length) continue;

                queue.push([nextX, nextY]);
            }
        }
    }

    return uniques;
}

console.log(unique([[0,0,0],[0,1,0],[0,0,0]]));
// console.log(unique([[0,1],[0,0]]));
// console.log(unique([[1]]));
// console.log(unique([[0]]));
