

/**
 * Leetcode #938
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 * */
const rangeSumBST = function(root, low, high) {


    const queue = [];
    let sum = 0;

    if(!root) return sum;

    queue.push(root);
    while( queue.length !== 0 ) {

        const node = queue.shift();

        if(!node) continue;

        if( node.val >= low && node.val <= high ) sum += node.val;

        if(node.left !== null && node.val >= low) queue.push(node.left);
        if(node.right !== null && node.val <= high) queue.push(node.right);

    }

    return sum;

};