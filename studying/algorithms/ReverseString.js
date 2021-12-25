const reverseString = function(chars) {

    let index = 0, length = chars.length;
    while(index < length / 2) {
        [ chars[index], chars[length - index - 1] ] = [chars[length - index - 1], chars[index]];
        index++;
    }

    console.log(chars);
};

reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]);