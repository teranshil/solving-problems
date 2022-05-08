package challenges.april;
import utils.CollectionUtils;
import utils.TreeNode;

public class KthSmallestElementInABST {

    public static int current = 0;
    public static int max = 1;
    public static TreeNode selected;

    public static void main(String[] args) {

        Integer[] nums = { 3,1,4,null,2 };
        TreeNode root = CollectionUtils.treeFromArray(nums);
        KthSmallestElementInABST.flatten(root);

        System.out.println(selected.val);
    }

    public static TreeNode flatten(TreeNode node) {
        if(node.val == null || KthSmallestElementInABST.current >= KthSmallestElementInABST.max) return null;

        KthSmallestElementInABST.flatten(node.left);
        KthSmallestElementInABST.current++;
        if(KthSmallestElementInABST.current == KthSmallestElementInABST.max) KthSmallestElementInABST.selected = node;

        KthSmallestElementInABST.flatten(node.right);
        KthSmallestElementInABST.current++;
        if(KthSmallestElementInABST.current == KthSmallestElementInABST.max) KthSmallestElementInABST.selected = node;

        return null;
    }
}
