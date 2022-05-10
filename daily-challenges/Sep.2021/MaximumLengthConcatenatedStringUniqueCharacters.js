const maxLength = function(words) {

    const recursion = (word = '', start = 0) => {

        let max = 0;
        if(start === words.length) {
            (new Set([...word])).size === word.length ? word.length : 0;
        }

        for (let index = start; index < words.length; index++) {
            const characters = [ ...(word + words[index]) ];

            if((new Set(characters)).size !== characters.length) continue;

            const size = recursion(word + words[index], index + 1);
            const current = (new Set(characters)).size === characters.length ? characters.length : 0;

            max = Math.max(size, max, current);
        }

        return max;
    }

    return recursion();
};

console.log( maxLength(["abcdefghijklmnopqrstuvwxyz"]) );
console.log( maxLength(["un","iq","ue"]) );
console.log( maxLength(["cha","r","act","ers"]) );
