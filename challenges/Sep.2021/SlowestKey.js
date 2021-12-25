const slowestKey = function(releaseTimes, keysPressed) {

    const max = [ Number.MIN_SAFE_INTEGER, '' ];
    for (let index = 0; index < releaseTimes.length; index++) {

        let release = 0
        release = index === 0 ? releaseTimes[index]
                              : releaseTimes[index] - releaseTimes[index - 1];

        if(release > max[0]) {
            max[0] = release;
            max[1] = keysPressed[index];
        } else if(release === max[0]) {
           if(max[1] < keysPressed[index]) max[1] = keysPressed[index];

            max[0] = release;
        }
    }

    return max[1];
};

console.log( slowestKey([12,23,36,46,62], "spuda") );