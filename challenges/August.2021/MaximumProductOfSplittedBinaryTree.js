import createTree from '../../utils/CreateCollections.js';

const maxProduct = function(root) {

    const queue = [];
    const total = recursion(root,0);
    let max = Number.MIN_SAFE_INTEGER;

    queue.push( root );
    while(queue.length > 0) {
        const node = queue.shift();
        if( node === null ) continue;

        const currentSum = recursion(node, 0);
        const rest = total - currentSum;

        if(max < rest * currentSum) max = rest * currentSum;
        queue.push(node.left);
        queue.push(node.right);
    }

    return max;
};

const recursion = (root, sum) => {

    if( root === null ) return sum;

    sum = recursion(root.left, sum);
    sum = recursion(root.right, sum);

    return sum + root.val;
}

const root = createTree( [5, 3, 6, 2, 4, null, 7] );
console.log( maxProduct(root) );


// const maxProduct = (root) => {
//
//     const array = [];
//     /**
//      * array will be fill ascending value ordered [ 1, 2, ,3, 4, 5 ... ],
//      * therefore we can use the two pointers approach.
//      */
//     inorder(root, array);
//     let low = 0, high = array.length -1;
//
//     while (low < high) {
//
//         if(array[low] + array[high] === )
//     }
// }
//
// const inorder = (root, array) => {
//
//     if(root === null) return;
//
//     inorder(root.left, array);
//     array.push(root.val);
//     inorder(root.right, array)
// }


