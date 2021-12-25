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

        if(this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        if(!this.nodes.has(value)) this.nodes.set(value, []);
        this.nodes.get(value).push(node);

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

        if(!this.nodes.has(value)) this.nodes.set(value, []);
        this.nodes.get(value).push(node);
    }

    insertBefore(node, value) {

        const newNode = new LinkedListNode(value);
        newNode.next = node;

        if(node.prev !== null) {
            newNode.prev = node.prev;
            node.prev.next = newNode;
        } else {
            this.head = newNode;
        }

        node.prev = newNode;

        if(!this.nodes.has(value)) this.nodes.set(value, []);
        this.nodes.get(value).push(newNode);
        this.count++;
    }

    removeFirst() {
        const value = this.head.value;
        this.head = this.head.next;

        this.head !== null
            ? this.head.prev = null
            : this.tail = null;

        this.count--;

        this.nodes.get(value).pop();
        if( this.nodes.get(value).length === 0 ) this.nodes.delete(value);

        return value;
    }

    findNumberOfPeopleWithName( name ) {
       return this.nodes.has(name) ? this.nodes.get(name).length : 0;
    }

    findNodeByPosition( position ) {
        let current = this.head, number = 0;

        while (current !== null) {
            if (position === number) return current;
            current = current.next;
            number += 1;
        }
        return null;
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

class DoctorManager {

    constructor() {
        this.patients = new DoublyLinkedList();
    }

    executeCommand(command, params) {
        command = this.lowerCaseFirstLetter( command ).trim();
        if( command in this ) {
            return this[command]( params );
        }

        return 'Incorrect command!';
    }

    append(name) {
        this.patients.addLast( name );
        return 'OK';
    }

    insert(params) {

        params = params.split(' ');
        const position = parseInt( params[0] );
        const name = params[1];

        if(this.patients.count === 0) return 'Error';
        if(position < 0 || position > this.patients.count) return 'Error';

        if(position === 0) this.patients.addFirst(name);
        else if(position === this.patients.count) this.patients.addLast(name);
        else {
            const node = this.patients.findNodeByPosition(position);
            this.patients.insertBefore(node, name);
        }

        return 'OK';
    }

    find(name) {
        return this.patients.findNumberOfPeopleWithName(name);
    }

    examine(count) {
        const names = [];

        if(count > this.patients.count || count <= 0) return 'Error';
        while(count !== 0 && this.patients.count !== 0) {
            names.push( this.patients.removeFirst() );
            count -= 1;
        }

        return names.length > 0 ? names.join(' ') : 'Error';
    }

    values() {
        return this.patients.values();
    }

    lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }
}

let input = [
    'Append Steven',
    'Examine 1',
    'Find Ina',
    'Append Niki',
    'Insert 0 Peter',
    'Append Nadya',
    'Insert 3 Grigor',
    'Examine 5',
    'Append Asya',
    'Insert 4 Steven',
    'Append Steven',
    'Find Asya',
    'Find Steven',
    'Examine 3',
    'Find Peter',
    'Examine 4',
    'Find Steven',
    'Insert 1 Ina',
    'End'
];

// input = [
//     'Append Steven',
//     'Append Steven',
//     'Append Steven',
//     // 'Examine 3',
//     'Insert 1 Peter',
//     'End'
// ];

let print = console.log;

const doctorManager = new DoctorManager();
let index = 0;

while(true) {
    const current = input[index].trim();
    if(current === 'End') break;

    const command = current.slice(0, current.indexOf(' '));
    const params = current.slice(current.indexOf(' ') + 1);

    print( doctorManager.executeCommand(command, params) );
    // print( doctorManager.values() );
    index += 1;
}