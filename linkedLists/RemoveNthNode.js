import { createLinkedList } from "../utils/CreateCollections.js";

const removeNthFromEnd = function(head, number) {

    const nodes = new Map();
    const length = iterateOver(head, nodes, 1) - 1;
    const nextIndex = length - number + 2, beforeIndex = length - number;

    if( !nodes.has(beforeIndex) && nodes.has(nextIndex)) {
        return nodes.get(nextIndex);
    }

    if( nodes.has(beforeIndex) && nodes.has(nextIndex) ) {
        nodes.get(beforeIndex).next = nodes.get(nextIndex);
    }
    else if( nodes.has(beforeIndex) && !nodes.has(nextIndex) ) {
        nodes.get(beforeIndex).next = null;
    }

    return head;
}

const iterateOver = (node, nodes, number) => {

    if(node === null) return number;
    nodes.set(number, node);

    return iterateOver(node.next, nodes, number + 1);
}

let head = createLinkedList([ 1, 2 ]);
head = removeNthFromEnd( head, 1 );

while(head !== null) {
    console.log(head.val);
    head = head.next;
}

