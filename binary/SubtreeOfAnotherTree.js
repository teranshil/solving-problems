import create from '../utils/CreateCollections.js'

/*
 * check if tree root contains subRoot tree
 */
const isSubtree = (root, subRoot) => {

    if( root === null ) return false;
    if( root.val === subRoot.val && checkIsSubtree( root, subRoot) ) return true;

    return isSubtree( root.left, subRoot ) || isSubtree( root.right, subRoot );
};

const checkIsSubtree = ( root, subRoot ) => {

    if(root === null && subRoot === null ) return true;
    if(root === null || subRoot === null ) return false;
    if( root.val !== subRoot.val ) return false;

    return checkIsSubtree( root.left, subRoot.left ) && checkIsSubtree( root.right, subRoot.right );
}

const tree = [ 3, 4, 5, 1, 2 ];
const subTree = [ 4, 1, 2 ];

const startTree = create( tree );
const startSubtree = create( subTree );

console.log( isSubtree(startTree, startSubtree) );

const iterate = ( root ) => {

    if( root === null ) return false;

    console.log( root.val );
    iterate( root.left );
    iterate( root.right );
}
// iterate( startTree );
