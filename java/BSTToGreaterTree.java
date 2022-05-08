import utils.TreeNode;

public class BSTToGreaterTree {

    public static void main(String[] args) {
    }

    public static int sumSubTree(TreeNode node, int load) {
        if(node == null) return 0;
        if(node.left == null && node.right == null) {
            return node.val;
        }

        int rightSum = sumSubTree(node.right, 0);
        int leftSum = sumSubTree(node.left, rightSum);

        int sum = rightSum + leftSum + node.val;
        node.val = sum;

        return sum;
    }
}
