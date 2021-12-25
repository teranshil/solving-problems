import createBinary from './BinaryTree.js'

const preorderTraversal = ( root ) => {

    let stack = [], result = [];

    if (!root) return [];

    stack.push(root);
    while (stack.length > 0) {

        let node = stack.pop();

        if (node === null) continue;
        result.push(node.value);

        stack.push(node.right);
        stack.push(node.left); // left will be the next popped node
    }

    return result;
}

const input = [ 3, null, 5 ];
const root = createBinary( input );

// console.log( root );
console.log( preorderTraversal(root) );