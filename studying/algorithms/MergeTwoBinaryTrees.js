import createTree from '../../utils/CreateCollections.js'

/** Merging two binary tree, iterative approach.
 *  My own solution 617. Leetcode
 */
const mergeTrees = function(root1, root2) {
    const queue = [];

    if( root1 === null ) return root2;
    if( root2 === null ) return root1;

    queue.push(root1, root2);
    while(queue.length > 0) {

        const first = queue.shift();
        const second = queue.shift();

        if( first === null && second === null ) continue;

        if( second === null ) {
            queue.push(first.left, null);
            queue.push(first.right, null);
            continue;
        }

        first.val += second?.val ?? 0;

        if( first.left === null && second.left !== null) {
            first.left = { val: 0, left: null, right: null };
        }

        if( first.right === null && second.right !== null) {
            first.right = { val: 0, left: null, right: null };
        }

        queue.push(first.left, second.left);
        queue.push(first.right, second.right);
    }

    return root1;
};

/** Recursive approach */
const mergeTreeRecursive = (root1, root2) => {

    if( root1 === null ) return root2;
    if( root2 === null ) return root1;

    root1.val = root1.val + root2.val;
    root1.left = mergeTreeRecursive(root1.left, root2.left);
    root1.right = mergeTreeRecursive(root1.right, root2.right);

    return root1;
}

const rootOne = createTree([1, 3, 2, 5]);
const rootTwo = createTree([2,1,3,null,4,null,7]);

const root = mergeTrees(rootOne, rootTwo);
console.log(root);



