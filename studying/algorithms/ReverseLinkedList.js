import {createLinkedList} from "../../utils/CreateCollections.js";

/** reverse list iterative approach **/
const reverseList = function(current) {

    if(current === null) return current;

    let previous = null;
    while( true ) {
        const next = current.next;
        current.next = previous;

        if( next === null ) break;
        previous = current;
        current = next;
    }

    return current;
};

/** recursive approach **/
const reverseListRecursive = (head) => {

    let pointer = null;
    const recursion = (current) => {
        if(current.next === null) {
            pointer = current;
            return current;
        }

        const previous = recursion( current.next );
        if(current === head) current.next = null
        previous.next = current;

        return current;
    }

    recursion(head);

   return pointer;
}

let root = createLinkedList( [1, 2, 3, 4, 5 ]);
root = reverseListRecursive(root);
console.log(root);


