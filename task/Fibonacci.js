const fibonacci = (end, current = 0, previous = 0) => {
    if(end <= 0) return current;

    return (current === 1 && previous === 0)
            ? fibonacci(end - 1, current, current)
            : fibonacci(end - 1, (current + previous) || 1, current);
}
console.log( fibonacci( 50));