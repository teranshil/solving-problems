import createTree from "../../utils/CreateCollections.js";

const sumOfLeftLeaves = function(root) {
    const dfs = (node, side= '') => {
        if(node === null) return 0;
        if(node.left === null && node.right === null && side === 'left') return node.val;

        return dfs(node.left, 'left') + dfs(node.right, 'right');
    }

    return dfs(root);
};

const root = createTree([1]);
console.log( sumOfLeftLeaves(root) );
