const isValidSerialization = function(preorder) {

    const nodes = preorder.split(',');
    let index = recursion(nodes, 0) + 1;

    return nodes.length === index;
};

const recursion = (nodes, index) => {

   if( nodes[index] === '#' || nodes[index] === undefined) return index;

   index = recursion(nodes, index + 1);
   return recursion(nodes, index + 1);
}

const isValidSerializationSecond = (preorder) => {

    const elements = preorder.split(',');
    let vacancy = 1;
    for (const element of elements) {
        vacancy --;
        if(vacancy < 0) return false;

        if(element !== '#') vacancy += 2;
    }
    return vacancy === 0;
}

const answer = isValidSerializationSecond("9,3,4,#,#,1,#,#,2,#,6,#,#");
console.log(answer);