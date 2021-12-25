const onPower = (number, power) => {

    if(power === 0 ) return 1;

    const t = onPower(number, Math.floor( power / 2));

    if((power % 2) === 0) return t * t;
    else return number * t * t;
}

console.log( onPower(2, 4 ) );

const sum = function( a, b ) {
    return a + b;
};

// IIFE
(function() {
    console.log('IIFE')
})();