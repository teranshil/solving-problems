import createTree from '../../utils/CreateCollections.js'

const goodNodes = function(root) {

    return recursionV1(root, 0, Number.MIN_SAFE_INTEGER);

    // const count = [ 0 ];
    // recursionV2(root, count, Number.MIN_SAFE_INTEGER);
    // return count[0];
}

/**
 * count as primitive time
 * */
const recursionV1 = (root, count, max) => {

    if(root === null) return count;

    if(root.val >= max) {
        max = root.val;
        count += 1;
    }

   count = recursionV1(root.left, count, max);
   count = recursionV1(root.right, count, max)

   return count;
}

/**
 * recursion version as count reference type
 * */
const recursionV2 = (root, count, max) => {

    if(root === null) return 0;

    if(root.val >= max) {
        max = root.val;
        count[0] += 1;
    }

    recursionV2(root.left, count, max);
    recursionV2(root.right, count, max)
}


const input =[ 9, null, 3, 6 ];

const root = createTree(input);
console.log( goodNodes(root) );
