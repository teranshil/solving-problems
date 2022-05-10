import createTree from '../../utils/CreateCollections.js'

const isCousins = function(root, first, second) {
    const queue = [];
    queue.push(root);

    while(queue.length > 0) {
        const size = queue.length;
        let [ leftFound, rightFound ] = [ false, false ];
        for (let index = 0; index < size; index++) {
            const node = queue.shift();

            if(node === null) continue;

            if(first === node.val) leftFound = true;
            if(second === node.val) rightFound = true;
            if(leftFound && rightFound) return true;

            if( [first, second].every(e => [node.left?.val, node.right?.val].includes(e)) ) return false;

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return false;
};

const root = createTree( [1,2,3,null,4] );
console.log( isCousins(root, 2, 3) );




