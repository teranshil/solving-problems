const findDifferentBinaryString = function(nums) {

    const numbers = new Set(nums.map(num => parseInt(num, 2) ));
    const length = nums[0].length;

    for (let index = 0; index < length * 2; index++) {
        if(!numbers.has(index)) {
            const binary = (index).toString(2);
            return '0'.repeat(length - binary.length) + binary;
        }
    }
};

console.log( findDifferentBinaryString(["01","10"]) );
console.log( findDifferentBinaryString(["111","011","001"]) );

// 00, 01, 10, 11 -> 2^2 0, 1, 2, 3
// 000, 001, 011, 111, 110, 100, 010
// 000, 001, 010, 100, 110, 101, 011 -> 0, 1, 2, 3, 4, 5, 6
