import createTree from '../utils/CreateCollections.js'

const isSameTree = function(root, second) {

    const queue = [];
    if(root === null && second === null) return true;

    queue.push(root, second);
    while(queue.length > 0) {

        const node = queue.shift();
        const secondNode = queue.shift();

        if( (node === null && secondNode !== null) ||
            (node !== null && secondNode === null)) return false;

        if(node === null || secondNode === null ) continue;

        if( node.val !== secondNode.val ) return false;

        queue.push( node.left, secondNode.left );
        queue.push( node.right, secondNode.right );
    }

    return true;
};

const isSameTreeRecursive = (root, second) => {

    if(root === null && second === null) return true;

    if(root === null || second === null) return false;
    if( root.val !== second.val ) return false;

    return isSameTreeRecursive(root.right, second.right) &&
           isSameTreeRecursive(second.left, second.left);
}

const root = createTree([1,2,1]);
const second = createTree([1,1,2]);

console.log( isSameTree(root, second) );
console.log( isSameTreeRecursive(root, second) );
