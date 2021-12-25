const addOperators = function(num, target) {

    const functions = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b };
    const numbers = num.split('').map(Number);

    const recursion = (number = numbers[0], index = 0) => {

        if(number === target) return [''];
        if(number > target || index === numbers.length - 1) return [];

        let results = [];
        for (const [ operation, func ] of Object.entries(functions)) {
             const result = recursion(func(number, numbers[index + 1]), index + 1);

            if(result.length !== 0) {
                if(results.length !== 0) {
                    results.push( result.map( e => operation + numbers[index + 1] + e) );
                } else {
                    results = result.map( e => operation + numbers[index + 1] + e);
                }

            }
        }

        return results;
    }

    return recursion();
};

console.log( addOperators('232', 8) );