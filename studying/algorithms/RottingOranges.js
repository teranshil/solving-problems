const orangesRotting = function(grid) {

   const fresh = new Set();
   let rotten = new Set();
   const directions = [ [-1, 0], [1, 0], [0, 1], [0, -1]]

    for (let outer = 0; outer < grid.length; outer++) {
        for (let inner = 0; inner < grid[outer].length; inner++) {
             if( grid[outer][inner] === 1) fresh.add(outer + '' + inner);
             if( grid[outer][inner] === 2) rotten.add(outer + '' + inner);
        }
    }

    let minutes = 0;
    while( fresh.size > 0 ) {
        const infected = new Set();
        for (const tomato of rotten.keys()) {
            const inner = tomato[0] - 0;
            const outer = tomato[1] - 0;

            for (const direction of directions) {
                const x = inner + direction[0];
                const y = outer + direction[1];

                if( fresh.has(x + '' + y)) {
                    infected.add(x + '' + y);
                    fresh.delete( x + '' + y );
                }
            }
        }
        if( infected.size === 0 ) return -1;

        rotten = infected;
        minutes++;
    }

    return minutes;
};

const input = [[2,1,1],[0,1,1],[1,0,1]];

console.log( orangesRotting(input) );


