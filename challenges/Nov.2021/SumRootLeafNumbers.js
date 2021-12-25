import createTree from "../../utils/CreateCollections.js";

const sumNumbers = function(root) {
    let total = 0;
    const dfs = (node, sum = '') => {
        if(node === null) return;

        sum += node.val;
        if(node.left === null && node.right === null) total += parseInt(sum);


        dfs(node.left, sum);
        dfs(node.right, sum);
    }

    dfs(root);
    return total;
};

const root = createTree([4]);
console.log( sumNumbers(root) );

/* second solution */
const second = function(root) {
    const sum = (node, sumSoFar) => {
        if(node === null) return 0;
        if(node.left === null && node.right === null) {
            return (sumSoFar * 10) + node.val;
        }
        
        let ans = 0;
        ans += sum(node.left, (sumSoFar * 10) + node.val);
        ans += sum(node.right, (sumSoFar * 10) + node.val);

        return ans
    }

    return sum(root, 0);
};

console.log( second(root) );
