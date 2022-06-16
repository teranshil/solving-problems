const merge = (nums1, m, nums2, n) => {
    let zero = m - 1, one = n - 1, current = nums1.length - 1;

    while(one >= 0 && zero >= 0) {
        if(nums2[one] >= nums1[zero]) {
            nums1[current] = nums2[one--];
        } else {
            nums1[current] = nums1[zero--]
        }

        current -= 1;
    }

    while (one >= 0) {
        nums1[current--] = nums2[one--];
    }

    return nums1;
};

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));
console.log(merge([1,2,3,0,0,0], 3, [ 2,5,6 ], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
