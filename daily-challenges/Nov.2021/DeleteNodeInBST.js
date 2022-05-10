const deleteNode = function(root, key) {

    if(root === null) return null;

    if(root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    } else if(root.val < key) {

        root.right = deleteNode(root.right, key);
        return root;
    }
    else {
        if(root.left === null && root.right === null) return null;
        if(root.left === null) return root.right;
        if(root.right === null) return root.left;

        let node = root.right;
        while (node.left !== null) node = node.left;
        node.left = root.left;

        return root.right;
    }
};
