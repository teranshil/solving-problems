const intersect = function(nums1, nums2) {

    const occurrences = nums1.reduce( (acc, number) => {
        acc[number] = (acc[number] ?? 0) + 1;
        return acc;
    }, {});

    return nums2.reduce((acc, number) => {
        if(occurrences[number]) {
            acc.push(number);
            occurrences[number] -= 1;
        }

        return acc;
    }, []);
};

console.log( intersect([1, 1, 2, 3, 3, 4], [1, 4, 1, 5, 2]) );