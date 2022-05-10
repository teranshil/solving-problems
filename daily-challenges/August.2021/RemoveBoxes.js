
// unsuccessful - pseudo code
const removeBoxes = (boxes) => {

    dfs(0, 0, boxes.length - 1, boxes);
};

const dfs = ( streak, left, right, boxes ) => {

    if( left > right ) return 0;

    let max = Math.pow( streak + 1, 2) + dfs(0, left + 1, right, boxes);

    for (let index = left + 1; index <= right; index++) {

    }
}

const input = [ 1, 3, 2, 1, 2, 3, 4, 3, 1 ];
removeBoxes(input);

