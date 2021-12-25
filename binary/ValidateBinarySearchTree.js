import create from '../utils/CreateCollections.js'

const isValidBST = (root) => {
    return validate(root, null, null);
};

const validate = (root, low, high) => {

    if( root === null ) return true;
    if( (low !== null && root.val <= low) || (high !== null && root.val >= high) ) return false;

    return validate( root.left, low, root.val ) && validate( root.right, root.val, high );
}

const input = create([ 2, 1, 3 ]);

console.log( isValidBST(input) );