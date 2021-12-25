
// v1 unsuccessful
const calcLengthV1 = ( string, places ) => {

    const characters = string.split('');
    let maxLength = 0;

    for(let outer = 0; outer < characters.length; outer++) {
        let counter = places;
        let inner = 0, length = 0;
        while((counter > 0 && inner < characters.length) || (counter <= 0 && characters[inner] === characters[outer])) {
            if( characters[inner] !== characters[outer]) counter -= 1;
            inner += 1;
            length += 1;
        }

        if(maxLength < length) maxLength = length;
    }


    return maxLength;
}

console.log( calcLengthV1("ABAA", 0) );

const calcLengthV2 = ( string, places ) => {

    const char_counts = Array.from({ length: 26 });



}

calcLengthV2();