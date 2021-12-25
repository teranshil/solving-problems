import createTree from '../../utils/CreateCollections.js'

// Inorder - iterate over left -> root -> right
const stackSolution = (root) => {

    let current = root;
    let stack = [], result = [];

    if(root === null) return [];

    current = root;
    while( current !== null || stack.length !== 0) {

        while( current !== null ) {
            stack.push(current);
            current = current.left;
        }

        let node = stack.pop();
        result.push( node.val );

        current = node.right;

    }

    return result;

}

const recursiveSolution = ( root ) => {
    const result = [];
    recursion( root, result );

    return result;
}

const recursion = (root, result) => {
    if( root === null) return;

    if(root.left !== null) recursion(root.left, result);
    result.push(root.val);
    if(root.right !== null) recursion(root.right, result);
}

const root = createTree( [ 1, 2, 3, 4, 5, 6, null ] );
console.log( recursiveSolution(root) );
