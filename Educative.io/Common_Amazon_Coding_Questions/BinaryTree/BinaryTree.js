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
                current = left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }      
    }







}