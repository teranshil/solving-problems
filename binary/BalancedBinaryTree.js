import createTree from '../utils/CreateCollections.js';

const isBalanced = function(root) {

    if(root === null) return true;

    const recursion = (root) => {

        if(root === null) return true;
        const difference = Math.abs(treeDept(root.left) - treeDept(root.right) );
        if( difference >= 2 ) return false;

        return recursion(root.left) && recursion(root.right)
    }

    const treeDept = ( root ) => {

        if(root === null) return 0;

        const left = treeDept(root.left);
        const right = treeDept(root.right);

        return Math.max(left, right) + 1;
    }

    return recursion(root);
};

const root = createTree([1,2,2,3,null,null,3,4,null,null,4]);
console.log( isBalanced(root) );
