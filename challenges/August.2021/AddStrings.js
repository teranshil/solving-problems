const addStrings = (num1, num2) => {

    if(num1.length < num2.length) [ num1, num2 ] = [ num2, num1];

    let result = '', rest = 0, index = 1;
    while(index <= num1.length) {

        let first = num1.length - index, second = num2.length - index;
        let sum = parseInt(num1[first]) + ( parseInt(num2[second]) || 0 ) + rest;

        if(sum >= 10 && index !== num1.length) {
            rest = 1;
            sum = sum % 10;
        } else {
            rest = 0;
        }

        result = sum + result;
        index += 1;
    }

    return result;
};
console.log( addStrings('9', '91') );