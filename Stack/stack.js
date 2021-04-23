/*
LILO: last in first out
picture a pile of dirty plates in your sink.
As you add more plates, you bury the old ones
further down.  When you take a plate off the top to wash
it, your taking the last plate you put in, "Last in, first out",

Like a stack of plates, we can only access the topmost plate at any time. 
We must remove that plate before we get down to other plates. 
This is useful for function calls, 
hence why it's called a "call stack" in JavaScript

.Push():  we place new items at the end of the array. 

.Pop:  pop() method removes the last element from an array and returns that element. 
This method changes the length of the array.


*/

function Stack() {
    const array = [];

    return {
        // push
        push(item) {
            array.push(item);
        },
        pop() {
            return array.pop();
        },
        peek() {
            return array[array.length - 1];
        },
        get length() {
            return array.length;
        },
        isEmpty() {
            return array.length == 0;
        }
    }

}

let myStack = Stack();

myStack.push('bread');
myStack.push('ham');
myStack.push('cheese');
myStack.push('Mayonaisse');



console.log(myStack.length);
console.log(myStack.peek());


/* 
Strengths:
Fast operations. All stack operations take O(1)O(1) time.
Uses:
The call stack is a stack that tracks function calls in a program. When a function returns, which function do we "pop" back to? The last one that "pushed" a function call.
Depth-first search uses a stack (sometimes the call stack) to keep track of which nodes to visit next.
String parsing—stacks turn out to be useful for several types of string parsing.
Implementation
You can implement a stack with either a linked list or a dynamic array—they both work pretty well:





*/