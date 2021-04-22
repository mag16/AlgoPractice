/*
LILO: last in first out

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
