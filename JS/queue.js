/*
A queue is a first-in, first-out data structure (FIFO). 
We can only remove items from the queue one at a time, 
and must remove items in the same sequence as they were 
placed in the queue.

.unshft: adds one or more elements to the BEGINNING of
the array and returns
new length of the array

.pop: method removes last element from an array
and returns that element
*/


function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            //peek method that will return the item that's next to be removed.
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length == 0;
        }

    }
}


const q = new createQueue();

q.enqueue("Study hard for this interview");
q.enqueue("Make dat money cashiooooooo");
q.enqueue("Be happy");

q.dequeue();
q.dequeue();
//console.log(q.peek());
console.log(q.isEmpty());
// q.dequeue();
