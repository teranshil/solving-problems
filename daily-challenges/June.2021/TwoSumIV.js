import createTree from '../../utils/CreateCollections.js'

const findTarget = function(root, target) {

    const queue = [];
    if(root === null) return false;

    queue.push(root);
    while(queue.length > 0) {

        const node = queue.shift();
        if( node === null ) continue;

        const rest = target - node.val;
        if(rest > node.val)
            if( solve(root, node, rest)) return true;
        else
            if( solve(root, node, rest) ) return true;

        queue.push( node.left );
        queue.push( node.right );
    }

    return false;
};

const solve = (root, origin, target) => {

    if(root === null) return false;
    if(root.val === target && root !== origin) return true;

    return root.val > target ? solve(root.left, origin, target) : solve(root.right, origin, target);
}

const root = createTree( [4, 1, 3]);
console.log( findTarget(root, 3) );
