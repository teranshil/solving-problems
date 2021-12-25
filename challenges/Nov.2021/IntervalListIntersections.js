const intervalIntersection = function(firstList, secondList) {

    const result = [];
    let pointerOne = 0, pointerTwo = 0;
    while(pointerOne < firstList.length && pointerTwo < secondList.length) {
        const start = Math.max(firstList[pointerOne][0], secondList[pointerTwo][0]);
        const end = Math.min(firstList[pointerOne][1], secondList[pointerTwo][1]);

        if(start < end) result.push([start, end]);

        if(firstList[pointerOne][1] === end) pointerOne++;
        if(secondList[pointerTwo][1] === end) pointerTwo++;
    }

    return result;
};

const result = intervalIntersection([ [0,2],[5,10],[13,23],[24,25] ], [ [1,5],[8,12],[15,24],[25,26] ]);
console.log( result );
