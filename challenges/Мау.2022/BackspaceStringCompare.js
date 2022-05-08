const backspaceCompare = function(first, second) {

    const firstStack = [];
    const secondStack = [];

    let counter = 0;
    while(counter < first.length || counter < second.length) {

        if(counter < first.length) {
            first[counter] === '#' ? firstStack.pop() : firstStack.push(first[counter]);
        }

        if(counter < second.length) {
            second[counter] === '#' ? secondStack.pop() : secondStack.push(second[counter]);
        }

        counter++;
    }

    if(firstStack.length !== secondStack.length) return false;
    let index = 0;

    while (index < firstStack.length) {
        if(firstStack[index] !== secondStack[index]) return false;
        index++;
    }

    return true;
};


console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('a#c', 'b'));