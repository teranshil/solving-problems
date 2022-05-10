/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function(nestedList = []) {
    this.nums = this.flatten(nestedList);
    this.index = 0;
};


/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
NestedIterator.prototype.flatten = (nums) => {

    const results = [];

    for (let index = 0; index < nums.length; index++) {
        if(!nums[index].isInteger()) {
            results.push( ...this.flatten(nums[index].getList()) );
        } else {
            results.push(nums[index]);
        }
    }

    return results;
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return !(this.index === this.nums.length - 1);
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.nums[this.index++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */




const iterator = new NestedIterator([ 1, 2, 3]);
console.log(iterator);
