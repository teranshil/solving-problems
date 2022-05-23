const minimumCardPickup = function(cards) {
    const found = new Map();
    let min = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < cards.length; index++) {
        if(found.has(cards[index])) {
            min = Math.min((index - found.get(cards[index])) + 1, min);
        }

        found.set(cards[index], index);
    }

    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};

console.log(minimumCardPickup([3,4,2,3,4,7]));
console.log(minimumCardPickup([1,0,5,3]));
