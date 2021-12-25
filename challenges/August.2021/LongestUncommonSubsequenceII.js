const findLUSlength = function(strs) {

    let max = -1;
    for (let outer = 0; outer < strs.length; outer++) {
        let flag = true, temp = strs[outer].length;
        for (let inner = 0; inner < strs.length; inner++) {
            if( outer === inner ) continue;
            if( isSubSequence(strs[inner], strs[outer]) ) continue;

            flag = false;
            break;
        }

        if(!flag) {
            max = Math.max( temp, max );
        }

    }

    return max;
};
const isSubSequence = ( searched, sequence) => {

    if( searched.length < sequence ) return true;

    let pointerOne = 0, pointerTwo = 0;
    while( pointerOne < sequence.length && pointerTwo < searched.length ) {

        if( searched[pointerTwo] === sequence[pointerOne] ) pointerOne++;
        pointerTwo++;
    }

    return pointerOne === sequence.length;
}

console.log( findLUSlength(["aabbcc", "aabbcc","bc","bcc","aabbccc"]));