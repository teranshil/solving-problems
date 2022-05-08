Array.prototype.max = function() {
    /**
     * this will point to its wrapping content, [ 1, 2, 3, 4, 5 ].max() -> this will be the array
     * second argument to apply is an array with arguments to be passed to max
     * */
    return Math.max.apply(null, this);
}
const array = [ 1, 2, 3, 6, 5 ];
console.log(array.max());

/** note */
const max = array.max;
console.log( max() ); // result will be undefined, because max() wrapping content now is the global objectS
