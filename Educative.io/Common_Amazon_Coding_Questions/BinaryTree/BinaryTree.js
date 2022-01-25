/*
Level Order Traversal of Binary Tree
Given the root of a binary tree, display the node values at each level. 
Node values for all levels should be displayed on separate lines.

Level order traversal for this tree should look like: 100; 50, 200; 25, 75, 350

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null   
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        // add the root node
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }      
    }

    findNode(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = current;
            }
        }

        if (!found) return `This node does not exist`;
        return found;
    }
}

let BST = new BinaryTree();

BST.insert(100);
BST.insert(50);
BST.insert(200);
BST.insert(25);
BST.insert(75);
BST.insert(200);
BST.insert(350);

console.log(BST);
console.log(BST.findNode(352));