const CombinationIterator = function(characters, combinationLength) {
    this.characters = characters;
    this.count = 0;
    this.combinationLength = combinationLength;
    this.combinations = this.combine();
};

CombinationIterator.prototype.next = function() {
    if(this.hasNext()) return this.combinations[this.count++];
};

CombinationIterator.prototype.combine = function(start = 0, combination = '') {
    if(combination.length === this.combinationLength) return [ combination ];

    const combinations = []
    for (let index = start; index < this.characters.length; index++) {
        const result = this.combine(index + 1, combination + this.characters[index]);
        combinations.push( ...result );
    }

    return combinations;
}

CombinationIterator.prototype.hasNext = function() {
    return this.count < this.combinations.length;
};

// const combine = (characters, size, start = 0, combination = '') => {
//     if(combination.length === size) return [ combination ];
//
//     const combinations = [];
//     for (let index = start; index < characters.length; index++) {
//         const result = combine(characters, size, index + 1, combination + characters[index]);
//         combinations.push( ...result );
//     }
//
//     return combinations;
// }

const combination = new CombinationIterator("abc", 2);
console.log( combination.next() );
console.log( combination.hasNext() );
console.log( combination.next() );
console.log( combination.next() );
console.log( combination.hasNext() );
