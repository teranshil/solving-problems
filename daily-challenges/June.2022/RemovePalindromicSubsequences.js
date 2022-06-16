const removePalindromeSub = function(string) {
    if(string.length === 0) return 0;
    const isPalindrome = () => {
        for (let index = 0; index < string.length; index++) {
            if(string[index] !== string[string.length - index - 1]) return false;
        }

        return true;
    }

    if(isPalindrome()) return 1;
    return 2;
};
