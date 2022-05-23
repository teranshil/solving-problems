import createTree from "../../utils/CreateCollections.js";

/* BFS approach */
const deepestLeavesSum = function(root) {
    const queue = [ root ];
    let levelSum = 0;

    while (queue.length !== 0) {
        const size = queue.length;

        levelSum = 0;
        for (let index = 0; index < size; index++) {
            const node = queue.shift();

            levelSum += node.val;
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }

    return levelSum;
};

// let root = createTree([1,2,3,4,5,null,6,7,null,null,null,null,8]);
// console.log(deepestLeavesSum(root));
//
// root = createTree([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]);
// console.log(deepestLeavesSum(root));


/* recursion implementation */
const deepestLeavesSumRecursion = (root) => {
    let maxDepth = 0, sum = 0;

    const find = (node, dept = 0) => {
        if(node === null) return 0;

        if(maxDepth < dept) {
            dept = maxDepth;
            sum = 0;
        }

        if(dept === maxDepth) {
            sum += node.val;
        }

        find(node.left, dept + 1);
        find(node.right, dept + 1);
    }

    find(root);
    return maxDepth;
}

let root = createTree([1,2,3,4,5,null,6,7,null,null,null,null,8]);
console.log(deepestLeavesSum(root));

root = createTree([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]);
console.log(deepestLeavesSum(root));
