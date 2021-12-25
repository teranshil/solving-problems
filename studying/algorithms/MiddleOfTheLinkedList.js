import { createLinkedList } from "../../utils/CreateCollections.js";

const middleNode = function(head) {

    const nodes = new Map();
    const length = iterateOver(head, nodes, 0);
    const middle = length / 2;

    return middle % 1 === 0 ? nodes.get(middle) : nodes.get(Math.floor(middle));
};

const iterateOver = (node, nodes, number) => {

    if(node === null) return number;
    nodes.set(number, node);

    return iterateOver(node.next, nodes, number + 1);
}

const middleNodeSecond = (head) => {

    let slowPointer = head;
    let fastPointer = head;

    while( fastPointer !== null && fastPointer.next !== null ){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
}


const head = createLinkedList([1, 2] );
console.log( middleNodeSecond( head ) );