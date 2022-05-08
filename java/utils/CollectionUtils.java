package utils;
import java.util.*;

public class CollectionUtils {
    public static TreeNode treeFromArray(Integer[] elements) {
        if (elements.length == 0) return null;

        TreeNode root = new TreeNode(elements[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        for (int index = 1; index < elements.length; index++) {
            TreeNode node = queue.peek();
            if (node.left == null) {
                node.left = new TreeNode(elements[index]);
                if (elements[index] != null) queue.add(node.left);
            } else if (node.right == null) {
                node.right = new TreeNode(elements[index]);
                if (elements[index] != null) queue.add(node.right);
                queue.remove();
            }
        }
        return root;
    }
}
