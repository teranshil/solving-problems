import createTree from '../../utils/CreateCollections.js'

const connect = function(root) {

    if(root === null) return root;
    const queue = [];

    queue.push( root );
    while (queue.length > 0) {
        const power = queue.length;

        let previous = null;
        for (let index = 0; index < power; index++) {
            const node = queue.shift();

            if (node === null) continue;
            if (previous !== null)
                previous.next = node;

            previous = node;
            if (index === power - 1) node.next = null;

            queue.push(node.left, node.right);
        }
    }

    return root;
};

const root = createTree( [1,2,3,4,5,6,7] );
console.log( connect(root) );
