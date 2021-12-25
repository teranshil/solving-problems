
const elements = [ 4, 5, 6, 7, 8 ];

// recursive call to anonymous function with arguments.calle
// it's not possible to call fat itself with arguments.calle
const factorials = elements.map( function(element) {
    return element > 1 ? arguments.callee(element - 1) * element : 1;
});


console.log( factorials );
