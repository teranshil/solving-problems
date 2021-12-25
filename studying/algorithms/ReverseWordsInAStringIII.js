const reverseWords = function(string) {

    let result = '', word = ''
    for(let index = string.length - 1; index >= 0; index--) {

        result = result + string[index];
    }

    return result;
};

console.log( reverseWords( "Let's take LeetCode contest") );