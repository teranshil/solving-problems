import createTree from "../utils/CreateCollections.js";

const findBottomLeftValue = function(root) {
    const queue = [];
    queue.push( root );

    let mostLeft = 0;
    while (queue.length > 0) {
        const size = queue.length;
        for (let index = 0; index < size; index++) {
            const node = queue.shift();
            if(node === null) continue;

            if(node.left === null && node.right === null) mostLeft = node.val;

            queue.push(node.right);
            queue.push(node.left);
        }
    }

    return mostLeft;
};

const root = createTree( [1,2,3,4,null,5,6,null,null,7]);
console.log( findBottomLeftValue(root) );
