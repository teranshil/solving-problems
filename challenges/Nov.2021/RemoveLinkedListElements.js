import {createLinkedList} from "../../utils/CreateCollections.js";

const removeElements = function(head, val) {
    let node = head, previous = null;

    while(node !== null) {
        if(node.val === val) {
           if(head.val === val) head = node.next;
           else previous.next = node.next;
        } else {
            previous = node;
        }

        node = node.next;
    }

    return head;
};

/**
 * Recursive solution, end to start approach
 * */
const removeElementsRecursive = (head, value) => {

    if(head === null) return null;
    head.next = removeElementsRecursive(head.next, value);

    return head.val === value ? head.next : head;
}

const root = createLinkedList( [7, 7, 7, 7]);
let head = removeElementsRecursive(root, 7);

while(head !== null) {
    console.log(head.val);
    head = head.next;
}
