import { createLinkedList } from "../utils/CreateCollections.js";

const deleteDuplicates = function(head) {

    let current = head, previous = null;
    while(current !== null) {

        let second = current.next, isFoundDuplicates = false;
        while(second !== null && current.val === second.val) {
            second = second.next;

            if(previous !== null) {
                previous.next = second;
            } else head = second;

            isFoundDuplicates = true;
        }

        if(!isFoundDuplicates) previous = current;
        current = second;
    }

    return head;b
};

const head = createLinkedList([1,2,3,3,4,4,5,5,5]);

let node = deleteDuplicates(head);

while(node !== null) {
    console.log(node.val);
    node = node.next;
}