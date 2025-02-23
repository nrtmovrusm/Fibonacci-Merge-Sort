// Node class
class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  // LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Append a value to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Prepend a value to the start of the list
    prepend(value) {
      const newNode = new Node(value);
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    // Return the size of the list
    getSize() {
      return this.size;
    }
  
    // Return the first node (head) in the list
    head() {
      return this.head;
    }
  
    // Return the last node (tail) in the list
    tail() {
      return this.tail;
    }
  
    // Return the node at a specific index
    at(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
  
      return currentNode;
    }
  
    // Remove the last node from the list
    pop() {
      if (this.size === 0) {
        return null;
      }
  
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.tail = currentNode;
      }
      this.size--;
    }
  
    // Check if the list contains a value
    contains(value) {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    // Find the index of a node containing a value
    find(value) {
      let currentNode = this.head;
      let index = 0;
  
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
      return null;
    }
  
    // Convert the LinkedList to a string representation
    toString() {
      let currentNode = this.head;
      let result = '';
  
      while (currentNode !== null) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      result += 'null';
      return result;
    }
}



const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());