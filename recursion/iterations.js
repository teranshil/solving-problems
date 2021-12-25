const factorial = (number) => {

    if( number === 1) return number;

    return factorial(number - 1) * number;
    /**
     * another approach
     * if(number === 1) return;
     *
     * return number * factorial(number - 1);
     * **/
}
console.log( factorial(4))

/** reversing string in recursive manner **/
const reverse = ( string ) => {

    if( string.length === 1) return string;

    return reverse(string.slice(1)) + string[0];
}
console.log(reverse('ASD'))