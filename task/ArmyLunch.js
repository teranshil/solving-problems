const armyLunch = (soldiers) => {
    const order = { 'S': 3, 'C': 2, 'P': 1 };
    return soldiers.sort( (a, b) => order[ b[0] ] - order[ a[0] ]).join(' ');
}

const input = 'S1 C1 P1';

console.log( armyLunch(input.split(' ')) );