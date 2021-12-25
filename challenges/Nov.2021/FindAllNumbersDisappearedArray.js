const findDisappearedNumbers = function(nums) {

    const uniques = new Set([...nums]);

    for (let index = 0; index < nums.length; index++) {
        if( uniques.has(index + 1) ) uniques.delete(index + 1);
        else uniques.add( index + 1);
    }

    return [ ...uniques ];
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));;
console.log(findDisappearedNumbers([1, 1]));
