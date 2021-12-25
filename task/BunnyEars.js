
const bunnyEars = (number) => {
    if(number === 0) return 0;

    return bunnyEars(number - 1) + 2;
}

print( bunnyEars(parseInt(gets())));