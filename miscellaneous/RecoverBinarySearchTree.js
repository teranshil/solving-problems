import createTree from '../utils/CreateCollections.js'

const recoverTree = function(root) {

    const recursive = (root, low, high) => {

        if(root === null) return true;

        if( low !== null && root.val <= low.val ) {
            [ high.val, root.val ] = [ root.val, high.val ];
            return true;
        }
        if( high !== null && root.val >= high.val ) {
            [ root.val, high.val ] = [ high.val, root.val ];
            return true;
        }

        // first recursion will go to the left tree, second to right
        // we use this approach to pass down constant root.val
        return recursive( root.left, low, root ) && recursive( root.right, root, high );
    }

    recursive(root, null, null)
};

const root = createTree(  [3, 1, 4, null, null, 2]);

recoverTree( root );
console.log( root );
