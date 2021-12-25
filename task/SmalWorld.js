const smallWorld = ( world ) => {

    const transform = (x, y, count = 0) => {
        if(world[x] === undefined || world[x][y] === undefined || world[x][y] === 0) return count;

        world[x][y] = 0;
        count += 1;

        count = transform(x + 1, y, count);
        count = transform(x - 1, y, count );
        count = transform(x, y + 1, count);
        count = transform(x, y - 1, count);

        return count;
    }

    const sizes = [];
    for (let outer = 0; outer < world.length; outer++) {
        for (let inner = 0; inner < world[outer].length; inner++) {
            if(world[outer][inner] === 1) sizes.push( transform(outer, inner) );
        }
    }

    print( sizes.sort((a, b) => b - a).join('\n') );

}
const [ rows, cols ] = gets().split(' ').map(Number);

const world = Array.from({ length: rows }, (row, index) => gets().split('').map(Number) );
smallWorld(world)