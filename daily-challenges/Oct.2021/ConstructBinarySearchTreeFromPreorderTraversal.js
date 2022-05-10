import { TreeNode } from "../../utils/CreateCollections.js";

const bstFromPreorder = function(preorder) {
    let index = 0;

    const transform = (elements, max, min) => {

        if( elements.length < index || elements[index] < max || elements[index] > min ) {
            return null;
        }

        const value = elements[index++];
        const node = new TreeNode(value);

        node.left = transform(elements, max, value);
        node.right = transform(elements, value, min);

        return node;
    }

    return transform(preorder, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
console.log( bstFromPreorder([8,5,1,7,10,12]) );




/** more understandable solution **/
const binarySearchTreePreorder = (preorder) => {
    let root = null;
    for (const value of preorder) {
        root = search(root, value);
    }

    function search(root, value) {
        if(root === null) {
            root = { value, left: null, right: null };
        } else if(value < root.value) {
            root.left = search(root.left, value);
        } else if(value > root.value) {
            root.right = search(root.right, value);
        }

        return root;
    }

    return root;
}

console.log( binarySearchTreePreorder([8,5,1,7,10,12]) );
