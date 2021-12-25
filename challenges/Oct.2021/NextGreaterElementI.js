const nextGreaterElement = function(first, second) {

    const elements = [];
    for (let outer = 0; outer < first.length; outer++) {
       const searched = first[outer];
       let isFound = false;

        for (let inner = 0; inner < second.length; inner++) {
            if(second[inner] === searched) isFound = true;
            if(isFound && second[inner] > searched) {
                elements.push(second[inner]);
                break;
            }
            if(isFound && inner === second.length - 1) elements.push(-1);
        }
    }

    return elements;
};

console.log( nextGreaterElement([2,4], [1,2,3,4]) );

/** using monotonic stack */
const nextGreaterElementOptimized = function(first, second) {

    const monotonicStack = [];
    const nextCollection = new Map();

    for (let index = 0; index < second.length; index++) {

        if(monotonicStack.length === 0) monotonicStack.push(second[index]);
        else if(monotonicStack[monotonicStack.length - 1] ) {}


    }


}
