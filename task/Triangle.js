const print = console.log;

const triangle = (number) => number === 0 ? 0 : triangle(number - 1) + number;
// print( triangle(parseInt( '5' )));

const sumDigits = (number) => {
    if(number < 10) return number;
    return sumDigits(Math.floor(number / 10)) + number % 10;
}

const sum = (number) =>  number < 10 ? number : sum(Math.floor(number / 10)) + number % 10;

// print( sum(126));


const occurrences = (number) => {
    if(number < 10 && number === 7) return 1;
    else if(number < 10) return 0;

    return occurrences(Math.floor(number / 10)) + (number % 10 === 7 ? 1 : 0);
}

// print(occurrences( parseInt( gets() )));

const occurrencesEight = (number) => {
    if(number < 10 && number === 8) return { sum: 1, last: number };
    else if(number < 10) return { sum: 0, last: number };

    const previous = occurrencesEight(Math.floor(number / 10));
    if(previous.last === 8 && number % 10 === 8 ) previous.sum += 2;
    else if(number % 10 === 8) previous.sum += 1;

    previous.last = number % 10;
    return previous;
}
// print(occurrencesEight( parseInt( '0' )).sum);

const pow = (base, power) => {
    if(power <= 1) return base;

    return pow(base, power - 1) * base;
}

// print(pow(3, 2));

const lowerCases = ( string, high = string.length - 1) => {
    if(high === 0) return string[high] === 'x' ? 1 : 0;

    return lowerCases(string, high - 1) + (string[high] === 'x' ? 1 : 0);
}

// print( lowerCases( 'xhixhix'));

const countWords = (string, start = 0) => {
    if(string.length === start) return 0;
    return ((string[start] === 'h' && string[start + 1] === 'i') ? 1 : 0) + countWords(string, start + 1);
}

// print( countWords( 'hihi'));

const replaceOccurrences = (string = '') => {

    if(!string.includes('pi')) return string;
    return replaceOccurrences(string.replace('pi', '3.14'));
}

// print( replaceOccurrences('pipi'));

const findSix = ( array, index = 0 ) => (index === array.length) ? 0 :
                                                findSix(array, index + 1) + ( (array[index] === 11) ? 1 : 0 );

// const numbers = gets().split(',').map(Number);
// print( findSix(numbers, +gets()));

const findTimesTen = ( array, index = 0 ) => {

    if(index === array.length - 1) return false;
    if(array[index] * 10 === array[index + 1]) return true;

    return findTimesTen(array, index + 1);
}

// const numbers = gets().split(',').map(Number);
const numbers = '1,2,20'.split(',').map(Number);
print( findTimesTen(numbers, 0));

const digits = gets().split('').map(Number);
const target = 8;

const occurrences = (digits) => {
    let count = 0;
    let index = 0;

    const countOccurrences = (array, value) => {
        if (array[index] === value) {
            if (array[index + 1] === value) {
                count += 1;
            }
            count++;
        } else if (array.length === 0) {
            return count;
        }

        return countOccurrences(array.slice(1), value);
    }

    return countOccurrences(digits, target);
}

print(occurrences(digits));