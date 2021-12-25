const numDistinct = function(stringOne, stringTwo) {
    let cache = {};
    const search = (start = 0, searched = 0) => {
        if(searched === stringTwo.length) return 1;
        if(start === stringOne.length) return 0;
        if(start + '' + searched in cache) return cache[ start + '' + searched ];

        if(stringOne[start] === stringTwo[searched])
          cache[ start + '' + searched ] = search(start + 1, searched + 1) + search(start + 1, searched);
        else
          cache[ start + '' + searched ] =  search(start + 1, searched);

        return cache[ start + '' + searched ];
    }

    return search();
};

console.log( numDistinct('rabbbit', 'rabbit') )
