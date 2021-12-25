const minCostToMoveChips = function(positions) {

    let even = 0, odd = 0;
    for (const position of positions) {
        position % 2 === 0 ? even++ : odd++;
    }

    return Math.min(even, odd);
};
