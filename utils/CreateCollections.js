const createTree = (elements) => {
    const treeNodesQueue = [], elementsQueue = [];
    for (let index = 1; index < elements.length; index++) {
        elementsQueue.push(elements[index]);
    }

    const root = { val: elements[0], left:null, right: null };
    treeNodesQueue.push(root);

    while (elementsQueue.length > 0) {
        const leftValue = elementsQueue.length > 0 ? elementsQueue.shift() : null;
        const rightValue = elementsQueue.length > 0 ? elementsQueue.shift() : null;
        const current = treeNodesQueue.shift();

        if(leftValue !== null) {
            const left = { val: leftValue, left:null, right: null }
            current.left = left;
            treeNodesQueue.push(left);
        }

        if(rightValue !== null) {
            const right = { val: rightValue, left:null, right: null };
            current.right = right;
            treeNodesQueue.push(right);
        }
    }

    return root;
}
export default createTree;

export class TreeNode {

    #value = null;
    #left = null;
    #right = null;

    constructor(value) {
        this.#value = value;
    }

    //setters and getters
    get value() {
        return this.#value;
    }

    get left() {
        return this.#left;
    }

    get right() {
        return this.#right;
    }

    set right(right) {
        this.#right = right;
    }

    set left(left) {
        this.#left = left;
    }
}

export const createLinkedList = ( nums = []) => {

    return nums.reduceRight( (acc, element) => {
        return { val: element, next: acc };
    }, null);

}
