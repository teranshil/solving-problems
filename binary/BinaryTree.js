export default ( elements ) => {

    const root = { value: 0, left: null, right: null };
    const queue = [ root ];

    for(let index = 0; index < elements.length; index++) {
        const node = queue.shift();

        node.value = elements[index];

        const left = { value: 0, left: null, right: null };
        const right = { value: 0, left: null, right: null };

        node.left = index * 2 + 1 < elements.length ? left : null;
        node.right = index * 2 + 2 < elements.length ? right : null;

        queue.push(left);
        queue.push(right);
    }

    return root;
}