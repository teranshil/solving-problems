const Trie = function() {
    this.dictionary = Array.from({ length: 26 }, () => []);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const position = word.charCodeAt(0) - 97;
    if(!this.dictionary[position].includes(word)) this.dictionary[position].push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const position = word.charCodeAt(0) - 97;
    return this.dictionary[position].includes(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const position = prefix.charCodeAt(0) - 97;
    return this.dictionary[position].findIndex( (searchedWord) => searchedWord.startsWith(prefix)) !== -1;
};

const instance = new Trie();
instance.insert('apple');
console.log(instance.search('apple'));
console.log(instance.search('app'));
console.log(instance.startsWith('app'))



// Second solution of the task

/** node value used by the optimized implementation */
const TrieNode = function () {
    this.children = Array.from({ length: 26 }, () => null);
    this.isWord = false;
}

TrieNode.prototype.getIsWord = function() {
    return this.isWord;
}

TrieNode.prototype.setIsWord = function(value) {
    this.isWord = value;
}


const TrieOptimized = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
TrieOptimized.prototype.insert = function(word) {

    let temporary = this.root;
    for (const letter of word) {
        const position = letter.charCodeAt(0) - 97;

        if(temporary.children[position] === null) temporary.children[position] = new TrieNode();
        temporary = temporary.children[position];
    }
    temporary.setIsWord(true);
};

/**
 * @param {string} word
 * @return {boolean}
 */
TrieOptimized.prototype.search = function(word) {
    let temporary = this.root;
    for (const letter of word) {
        temporary = temporary.children[letter.charCodeAt(0) - 97];

        if(temporary === null) return false;
    }

    return temporary.getIsWord();
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
TrieOptimized.prototype.startsWith = function(prefix) {
    let temporary = this.root;
    for (const letter of prefix) {
        temporary = temporary.children[letter.charCodeAt(0) - 97];

        if(temporary === null) return false;
    }
    return true;
};

console.log('!--- optimized ---!');

const trieInstance = new TrieOptimized();
trieInstance.insert('apple');
console.log(trieInstance.search('apple'));
console.log(trieInstance.search('app'));
console.log(trieInstance.startsWith('app'))
