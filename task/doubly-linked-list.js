class LinkedListNode {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = null;
        this.nodes = new Map();

    }

    addFirst(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;

        if(this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.nodes.set(value, node);
        this.count++;
    }

    addLast(value) {
        const node = new LinkedListNode(value);
        node.prev = this.tail;

        if(this.tail === null) {
            this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;
        this.nodes.set(value, node);
    }

    insertBefore(node, next) {

        next.next = node;

        if(node.prev !== null) {
            next.prev = node.prev;
            node.prev.next = next;
        } else {
            this.head = next;
        }

        node.prev = next;
        this.count++;
    }

    insertAfter(node, after) {
        node.next === null
            ? this.tail = after
            : node.next.prev = after;

        after.next = node.next;
        after.prev = node;
        node.next = after;

        this.count++;
    }

    remove(node) {

        if(node.prev !== null && node.next !== null) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        } else if(node.prev === null && node.next !== null) {
            node.next.prev = null;
            this.head = node.next;
        } else if(node.prev !== null && node.next === null) {
            node.prev.next = null;
            this.tail = node.prev;
        }

        node.next = null;
        node.prev = null;
    }

    values() {
        let current = this.head;
        const result = [];

        while( current !== null ) {
            result.push( current.value );
            current = current.next;
        }

        return result;
    }

    getNodeByValue(value) {
        return this.nodes.get(value) || null;
    }
}

const numberToBeShuffled = parseInt( gets().split(' ')[0] );
const shuffles = gets().split(' ').map(Number);
const linkedList = new DoublyLinkedList();

Array.from({ length: numberToBeShuffled })
     .forEach( (_, index) => linkedList.addLast(index + 1) );

for (const shuffle of shuffles) {

    if( shuffle % 2 === 0 ) {
        const next = linkedList.getNodeByValue(shuffle);
        const node = linkedList.getNodeByValue(Math.floor(shuffle / 2));

        if(next === null) continue;
        linkedList.remove(next);

        linkedList.insertAfter(node, next);

    } else {
        const nextShuffleValue = shuffle * 2;
        const next = linkedList.getNodeByValue(shuffle);
        const node = linkedList.getNodeByValue(nextShuffleValue);

        if(numberToBeShuffled === shuffle) continue;

        linkedList.remove(next);

        node === null
            ? linkedList.addLast(next.value)
            : linkedList.insertAfter(node, next);

    }
}

print( linkedList.values().join(' ') );