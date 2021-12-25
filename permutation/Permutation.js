const permute = function(nums) {
    const result = [];
    const temp = [];

    const backtracking = (temp, nums) => {
        if(nums.length === 0) {
            result.push([...temp]);
        }

        for(let index = 0; index < nums.length; index++) {
            temp.push(nums[index]);
            nums.splice(index, 1);
            backtracking(temp, nums);
            nums.splice(index, 0, temp.pop());
        }
    }

    backtracking(temp, nums);
    return result;
};

const permuteSecondWay = function(nums) {

    const result = [];
    const backtracking = (nums = [], temp = []) => {
        if(!nums.length) result.push( [...temp] );

        for (let index = 0; index < nums.length; index++) {
            temp.push(nums[index]);
            backtracking(nums.filter( (e, inner) => index !== inner), temp);
            temp.pop();
        }
    }
    backtracking(nums);

    return result;
}

// console.log( permute([1, 2, 3]) );
console.log( permuteSecondWay([1, 2, 3]) );


const permutations = function( nums ) {

    if(nums.length === 0) return [ [] ];

    const first = nums[0];
    const rest = nums.slice(1);

    const permsWithoutFirst = permutations( rest );
    const result = [];

    permsWithoutFirst.forEach( perm => {
        for (let index = 0; index < perm.length; index++) {
            result.push( [ ...perm.slice(0, index), first, ...perm.slice(index) ] );
        }

    });

    return result;
}