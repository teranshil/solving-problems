import createTree from "../utils/CreateCollections.js";

const trimBST = function(root, low, high) {

    const search = (node) => {
        if( node === null) return null;

        if(node.val > high) return search(node.left);
        if(node.val < low) return search(node.right);

        node.left = search(node.left);
        node.right = search(node.right);

        return node;
    }

    return search(root);
};

let root = createTree( [1, 0, 2]);
console.log( trimBST(root, 1, 2) );

root = createTree([3, 0, 4, null, 2, null, null, 1]);
console.log( trimBST(root, 1, 3) );

root = createTree([3, 1, 4, null, 2, null, null]);
console.log( trimBST(root, 1, 2) );
