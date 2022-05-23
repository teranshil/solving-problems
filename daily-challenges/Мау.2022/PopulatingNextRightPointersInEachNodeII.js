import createTree from "../../utils/CreateCollections.js";

const connect = function(root) {
    const queue = [];

    if(root === null) return root;
    queue.push(root);

    while(queue.length !== 0) {
        const size = queue.length;

        for (let index = 0; index < size; index++) {
            const node = queue.shift();

            index !== size - 1 ? node.next = queue[0] : node.next = null;

            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }

    return root;
};


// let root = createTree([1,2,3,4,5,null,7]);
// console.log(connect(root));

let root = createTree([]);
console.log(root);
console.log(connect(root));
