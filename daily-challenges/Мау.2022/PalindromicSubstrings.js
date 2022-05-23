const countSubstrings = function(string) {
    let palindromes = 0;

    for (let index = 0; index < string.length; index++) {
        let left = index, right = index;

        while(left >= 0 && string[left] === string[right] && right < string.length) {
          palindromes++;
          left--;
          right++;
        }

        left = index;
        right = index + 1;


        while(left >= 0 && string[left] === string[right] && right < string.length) {
            palindromes++;
            left--;
            right++;
        }
    }

    return palindromes;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
