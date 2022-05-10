import {createLinkedList} from "../../utils/CreateCollections.js";

const splitListToParts = function(head, numberParts) {

    let count = 0;
    let temp = head;

    while(temp !== null) {
        temp = temp.next;
        count++;
    }

    const result = [];
    const size = Math.floor(count / numberParts); // 14 / 3 => 4
    let distribute = count % numberParts; // 14 % 3 => (2) => [5], [5], [4],


    while(head !== null || numberParts > 0) {

        const array = [];
        for (let index = 0; index < size + (distribute > 0 ? 1 : 0) && head !== null; index++) {
            array.push(head.val);
            head = head.next;
        }

        distribute--;
        numberParts--;
        result.push( array );
    }

    return result;
};


const head = createLinkedList(Array.from({ length: 15 }, (_, index) => index + 1) );

console.log( splitListToParts(head, 5) );
