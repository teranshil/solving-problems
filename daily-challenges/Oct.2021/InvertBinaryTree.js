const invertTree = function(root) {
    const queue = [];

    queue.push(root);
    while(queue.length > 0) {
        const size = queue.length;
        for (let index = 0; index < size; index++) {
            const node = queue.shift();
            if(node === null) continue;

            queue.push(node.right, node.left);
            [ node.right, node.left ] = [ node.left, node.right ];
        }
    }

    return root;
};
