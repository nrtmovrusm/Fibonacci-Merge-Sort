class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
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
  
    getSize() {
      return this.size;
    }
  
    head() {
      return this.head;
    }
  
    tail() {
      return this.tail;
    }
  
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
  
    toString() {
      let currentNode = this.head;
      let result = '';
  
      while (currentNode !== null) {
        result += `( ${currentNode.value} ) --> `;
        currentNode = currentNode.nextNode;
      }
      result += 'null';
      return result;
    }
}