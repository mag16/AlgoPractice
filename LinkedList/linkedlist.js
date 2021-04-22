class Node {
    constructor(value, next = null) {
        this.value = value,
        this.next = next
    }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 0;
  }

  //insert at the end (shorter)
  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }
  // reverse the list
  reverseList() {
    let current = this.head;
    let next = null;
    let prev = null;

    while (current) {
      next = current.next;

      current.next = prev;

      prev = current;

      current = next;
    }

    this.head = prev;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
    
}

let myList = new LinkedList(1); 
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);

console.log(myList); 

myList.reverseList();
console.log(myList);

myList.traverse();
console.log(myList);
