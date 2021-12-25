const letterCasePermutation = function(string) {

    const elements = string.split('');
    const results = [];

    const backtracking = (temp = [], startIndex = 0) => {

        if( temp.length === elements.length ) {
            results.push(temp.join(''));
            return;
        }

        for (let index = startIndex; index < elements.length; index++) {

            if( isNaN(parseInt(elements[index]) )) {
                const element = elements[index];

                if( element === element.toLowerCase() ) {
                    temp.push(element);
                } else {
                    temp.push(element.toLowerCase());
                }

                backtracking([...temp], index + 1);
                temp.pop();

                temp.push(element.toUpperCase());
                backtracking([...temp], index + 1);
                temp.pop();
            } else {
                temp.push(elements[index]);
                if( temp.length === elements.length ) {
                    results.push(temp.join(''));
                    return;
                }
            }

        }

    }

    backtracking();
    return results;
};

console.log( letterCasePermutation('C') );