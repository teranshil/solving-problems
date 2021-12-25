const restoreIpAddresses = function(string) {

    const validIPAddresses = [];

    if(string.length > 12) return validIPAddresses;

    const restore = (number = 0, dots = 0, address = '') => {

        if(dots > 4) return false;

        if(dots === 4 && number === string.length) {
            validIPAddresses.push(address.substring(0, address.length - 1));
            return true;
        }

        let strNumber = '';
        for (let index = number; index < Math.min(index + 3, string.length) ; index++) {
            strNumber += string[index];
            /** (number === index || string[index] !== '0') -> this way we say that zero can be count only if it's by itself
             * 0.255 -> valid, 01.255 -> invalid */
            if(parseInt(strNumber) <= 255 && (number === index || string[index] !== '0'))
                restore(index + 1, dots + 1, address + strNumber + '.')

        }
    }

    restore();
    return validIPAddresses;
};

console.log( restoreIpAddresses('25525511135') );