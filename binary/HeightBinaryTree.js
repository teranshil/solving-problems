/** recursive way to find the height of tree **/
const treeDeptRecursive = (root) => {
    if(root === null) return 0;

    const left = treeDeptRecursive(root.left);
    const right = treeDeptRecursive(root.right);

    return Math.max(left, right) + 1;
}

/** iterative way to find the height of binary tree **/
const treeDeptIterative = (root) => {
    if(root === null) return true;

    const queue = [];
    let height = 0;

    queue.push( root );

    while (true) {
        let queueSize = queue.length;
        if(queueSize === 0) return height;

        height += 1;
        while(queueSize > 0) {

            const node = queue.pop();
            if(node === null) continue;

            node.right && queue.push(node.right);
            node.left && queue.push(node.left);

            queueSize -= 1;
        }
    }
}