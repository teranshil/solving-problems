
const print = console.log;

const bunnies = (number) => {
    if(number === 0) return 0;
    if(number === 1) return 2;

    return bunnies(number - 1) + ( (number % 2) === 0 ? 3 : 2);
}
// console.log( bunnies(3))
print( bunnies( parseInt( '4') ));