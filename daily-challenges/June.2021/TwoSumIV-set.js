import createTree from "../../utils/CreateCollections.js";

const findTarget = function(root, target) {
    const collection = new Set();

    const solve = ( node ) => {
        if( node === null ) return false;

        const rest = target - node.val;
        if( collection.has(rest) ) return true;
        collection.add( rest );

        return solve( node.left ) || solve( node.right );
    }

    return solve( root );
};






const root = createTree( [4, 1, 3]);
console.log( findTarget(root, 7) );
