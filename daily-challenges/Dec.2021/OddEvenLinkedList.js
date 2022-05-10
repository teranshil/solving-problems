import {createLinkedList} from "../../utils/CreateCollections.js";

const oddEvenList = (head) => {
    if(head === null) return head;

    let node = head, oddHead = head, oddTail = head, evenHead = head.next, evenTail = head.next, count = 1;
    while (node !== null) {
        if(count++ % 2 === 0) {
            evenTail.next = node;
            evenTail = node;
        } else {
            oddTail.next = node;
            oddTail = node;
        }

        node = node.next;
    }

    evenHead.next = oddHead;
    return evenHead;
}

let head = createLinkedList([1, 2, 3, 4, 5]);

head = oddEvenList(head);
while (head !== null) {
    head = head.next;
}
