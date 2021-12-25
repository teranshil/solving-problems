const solution = function(isBadVersion) {

    const solve = ( low, high ) => {
        const middle = Math.floor( ( low + high ) / 2);

        if(isBadVersion(middle) && !isBadVersion(middle - 1)) return middle;
        if(!isBadVersion(middle)) return solve(middle + 1, high);
        if(isBadVersion(middle)) return solve(low, middle);
    }

    return function(number) {
        return isBadVersion(1) ? 1 : solve(1, number);
    };

};

console.log( solution( e => e >= 2)(2) );