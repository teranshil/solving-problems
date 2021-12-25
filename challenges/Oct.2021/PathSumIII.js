import createBinaryTree from '../../utils/CreateCollections.js'

/** not optimized solution */
const pathSum = function(root, sum) {

    let occurrences = 0;
    const search = (node) => {
        if(node === null) return [];

        const elements = [];
        const leftElements = search(node.left);
        const rightElements = search(node.right);

        /** the 0 is important, this way we add the node value itself to the array */
        for (const current of [ ...leftElements, ...rightElements, 0 ]) {
            const next = current + node.val;
            if(next === sum) occurrences++;
            elements.push(next);
        }

        return elements;
    }

    search(root);
    return occurrences;
};

/** optimized solution */
const pathSumOptimized = function(root, sumTotal) {

    let occurrences = 0;
    const iterateSub = (node, sum) => {
        if(node === null) return;

        search(node, sum);
        iterateSub(node.left, sum);
        iterateSub(node.right, sum);
    }

    const search = (node, sum) => {
        if(node === null) return;
        if(node.val === sum) occurrences++;

        sum = sum - node.val;
        search(node.left, sum);
        search(node.right, sum);
    }

    iterateSub(root, sumTotal);
    return occurrences;
}

const root = createBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);

console.log( pathSum(root, 8) );
console.log( pathSumOptimized(root, 8) );
