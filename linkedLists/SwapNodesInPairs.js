import {createLinkedList} from "../utils/CreateCollections.js";

const swapPairs = (node) => {
    if(node.next === null) return node;

    const next = swapPairs(node.next, index + 1);

    node.next = next;
    if(index % 2 === 0) return node;

    node.next = next.next;
    next.next = node;

    return next;
};


const recursion = (node, index = 1) => {
    if(node.next === null) return node;
    const next = recursion(node.next, index + 1);

    const last = node.next;
    last.next = node;
    node.next = next;

    if(index % 2 === 0) return last;

    return node
    // node.next = next;
    // if(index % 2 === 0) return node;
    //
    // node.next = next.next;
    // next.next = node;

    return next;
}

const head = createLinkedList([1, 2, 3, 4]);
let node = recursion(head);

while (node !== null) {
    console.log(node.val);
    node = node.next;
}

