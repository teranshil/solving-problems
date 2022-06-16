const fibonacci = (end, current = 0, previous = 0) => {
    if(end <= 0) return current;

    return fibonacci(end - 1, (current + previous) || 1, current);
}
console.log( fibonacci( 50));
console.log( fibonacci( 1));
console.log( fibonacci( 0));
