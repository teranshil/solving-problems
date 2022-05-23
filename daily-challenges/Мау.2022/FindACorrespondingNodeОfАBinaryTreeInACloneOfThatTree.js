
const getTargetCopy = function(original, cloned, target) {

    const search = (node) => {
        if(node === null) return node;

        if(node.val === target.val) return node;

        const left = search(node.left);
        if(left !== null) return left;

        const right = search(node.right);
        if(right !== null) return right;

        return null;
    }

    return search(cloned);
};

const second = function(original, cloned, target) {
    let answer = null;

    const search = (node) => {
        if(node === null) return node;
        if(node.val === target.val) return answer = node;

        search(node.left);
        search(node.right);
    }

    search(cloned);
    return answer;
};
