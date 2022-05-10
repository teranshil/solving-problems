const getDecimalValue = function(head) {
    let number = 0;
    while (head !== null) {
        number *= 2;
        number += head.val;
        head = head.next;
    }

    return number;
};
