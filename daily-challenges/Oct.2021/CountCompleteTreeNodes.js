const countNodes = function(root) {
    if(root === null) return 0;

    let height = 1;
    let right = root.right, left = root.left;
    while (left !== null && right !== null) {
        height += 1;
        left = left.left;
        right = right.right;
    }

    return left === null && right === null ? Math.pow(2, height) - 1
                                           : 1 + countNodes(root.left) + countNodes(root.right);
};

