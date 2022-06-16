import CreateCollections, {createLinkedList} from "../../utils/CreateCollections.js";

const getIntersectionNode = function(headA, headB) {
    let [ firstPointer, secondPointer ] = [ headA, headB ];
    let sizeOne = 0, sizeTwo = 0;

    const getIntersection = (first, second, count) => {
        while(count > 0) {
            first = first.next;
            count--;
        }

        while(first !== null && second !== null) {
            if(first.val === second.val) return first;
            first = first.next; second = second.next;
        }

        return null;
    }

    while(firstPointer !== null) {
        sizeOne++;
        firstPointer = firstPointer.next;
    }

    while (secondPointer !== null) {
        sizeTwo++;
        secondPointer = secondPointer.next;
    }

    return sizeOne >= sizeTwo
        ? getIntersection(headA, headB, sizeOne - sizeTwo)
        : getIntersection(headB, headA, sizeTwo - sizeOne);
};

const first = createLinkedList([4,1,8,4,5]);
const second = createLinkedList([5,6,1,8,4,5]);

console.log(getIntersectionNode(first, second));
console.log(getIntersectionNode(createLinkedList( [1,9,1,2,4]), createLinkedList( [3,2,4])));
