import createTree from "../../utils/CreateCollections.js";

const findTarget = function(root, target) {
    const sorted = sortBinary(root);

    let low = 0, high = sorted.length - 1;
    while(low < high) {
        const sum = sorted[low] + sorted[high];
        if( sum === target) return true;

        sum > target ? high-- : low++;
    }

    return false;
};

const sortBinary = (root, sorted = []) => {
    if( root === null) return sorted;

    sortBinary(root.left, sorted);
    sorted.push(root.val);
    sortBinary(root.right, sorted)

    return sorted;
}



const root = createTree( [4, 1, 3]);
console.log( findTarget(root, 7) );
