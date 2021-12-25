const floodFill = function(image, x, y, next) {

    if(image[x][y] === next) return image;

    flood(image, x, y, image[x][y], next);
    return image;
};

const flood = (image, x, y, original, next) => {

    if(x < 0 || x >= image.length || y < 0 || y >= image[0].length ) return;
    if(image[x][y] !== original) return;

    image[x][y] = next;

    flood(image, x + 1, y, original, next);
    flood(image, x - 1, y, original, next);
    flood(image, x, y + 1, original, next);
    flood(image, x, y - 1, original, next);
}

console.log( floodFill( [[0,0,0],[0,1,1]], 1, 1, 1) );