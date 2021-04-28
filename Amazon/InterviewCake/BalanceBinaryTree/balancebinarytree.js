

/* 
https://www.interviewcake.com/question/javascript/balanced-binary-tree


*/


class BinaryTreeNode{
    constructor(value) {
        this.value = value;
        this.root = null;
        this.left = null;
        this.right = null;
    }
    insertRoot(value) {
        this.root = new BinaryTreeNode(value);
        return this.root;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }


};

let myBTNode = new BinaryTreeNode();

myBTNode.insertRoot(58);


function isTreeBalanced(treeRoot) {
    // A tree with no nodes is superbalanced since theres no leaves
    if (!treeRoot) {
        return true;
    }

    const depths = []; // We short-citcuit as soon as we find more than 2

    //Nodes will soter pairs of a node and the node's depth.
    const nodes = [];
    nodes.push([treeRoot, 0]);

    while (nodes.length) {
        // Pop a node and its depth from the top of our stack
        const nodePair = nodes.pop();
        const node = nodePair[0];
        const depth = nodePair[1];

        if (!node.left && !node.right) {
            //Case: we found a leaf
            //We only care if its a new depth
            if (depths.indexOf(depth) < 0) {
              // Two ways we might now have an unbalanced tree:
              //   1) More than 2 different leaf depths
              //   2) 2 leaf depths that are more than 1 apart
                if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depth[1] > 1))) {
                    return false;
                }
            }
        } else {
            // Case: this is a leaf - keep stepping down
            if (node.left) {
                nodes.push([node.left, depth + 1]);
            }
            if (node.right) {
                nodes.push([node.rightl, depth + 1]);
            }
        }
    }

    return true;
}

console.log(isTreeBalanced([1, 2, 2, 3, 3, null, null, 4, 4]));
console.log(isTreeBalanced([]));