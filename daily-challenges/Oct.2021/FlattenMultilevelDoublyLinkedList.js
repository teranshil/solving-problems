const flatten = function(root) {
    const iterate = (node) => {
        let current = node;

        while( current.next !== null || current.child !== null) {
            if(current.child !== null) {
                const next = current.next;
                const [ head, tail ] = iterate(current.child);
                head.prev = current;
                current.child = null;
                current.next = head;

                current = tail;
                current.next = next;
            } else {
                current = current.next;
            }


        }
        return [ node, current ]; // head, tail
    }

    return iterate(root)[0];
};
const root = { val: 1,
    next: { val: 2, next: { val: 3, next: null, prev: null, child: { val: 4, next: { val: 5, next: null, prev: null, child: null }, prev: null, child: null } }, prev: null, child: null }
    , prev: null, child: null };

let head = flatten(root);


while(head !== null) {
    console.log(head.val);
    head = head.next;
}
