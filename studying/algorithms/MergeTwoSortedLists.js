import { createLinkedList } from "../../utils/CreateCollections.js";

/** my own solution Leetcode 21. **/
const mergeTwoLists = function(rootOne, rootTwo) {

   const head = { val: 0, next: null };
   const recursion = (l1, l2, current) => {

       if(l1 === null && l2 === null) return;

       if(l1 === null && l2 !== null) {
           current.next = l2;
           current = current.next;
           recursion(l1, l2.next, current);
       }

       if(l2 === null && l1 !== null) {
           current.next = l1;
           current = current.next;
           recursion(l1.next, l2, current);
       }

       if( l1 !== null && l2 !== null && l1.val < l2.val) {
           current.next = l1;
           current = current.next;
           recursion(l1.next, l2, current);
       } else if(l1 !== null && l2 !== null && l1.val >= l2.val) {
           current.next = l2;
           current = current.next;
           recursion(l1, l2.next, current);
       }
   }

   recursion(rootOne, rootTwo, head);

   return head.next;
};

const mergeTwoListsRecursive = (pointerOne, pointerTwo) => {

    const recursion = (l1, l2) => {

        if(l1 === null) return l2;
        if(l2 === null) return l1;

        if(l1.val > l2.val) {
            const temp = l2.next;
            l2.next = recursion(l1, temp);
            return l2;
        } else {
            const temp = l1.next;
            l1.next = recursion(temp, l2);
            return l1;
        }

    }

    return recursion(pointerOne, pointerTwo);
}

const l1 = createLinkedList( [1, 2, 4]);
const l2 = createLinkedList( [3, 4]);

let root = mergeTwoListsRecursive(l1, l2);

while( root !== null ) {
    console.log(root.val);
    root = root.next;
}