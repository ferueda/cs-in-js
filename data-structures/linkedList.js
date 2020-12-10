class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _insertHead(data) {
    if (this.length === 0) {
      this.head = new ListNode(data);
      this.tail = this.head;
      this.length += 1;
      return;
    }

    this.head = new ListNode(data, this.head);
    this.length += 1;
  }

  _insertTail(data) {
    if (this.length === 0) return this._insertHead(data);

    this.tail.next = new ListNode(data);
    this.tail = this.tail.next;
    this.length += 1;
  }

  _deleteHead() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    this.head = this.head.next;
    this.length -= 1;
  }

  _deleteTail() {
    if (this.length === 0) return null;

    if (this.length === 1) return this._deleteHead();

    const prevNode = this.getAt(this.length - 2);

    prevNode.next = null;
    this.tail = prevNode;
    this.length -= 1;
  }

  getAt(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  getIndexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) return index;

      current = current.next;
      index += 1;
    }

    return undefined;
  }

  insert(data, index = this.length) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this._insertHead(data);
    if (index === this.length) return this._insertTail(data);

    const prevNode = this.getAt(index - 1);

    prevNode.next = new ListNode(data, prevNode.next);
    this.length += 1;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this._deleteHead();
    if (index === this.length - 1) return this._deleteTail();

    const prevNode = this.getAt(index - 1);

    prevNode.next = prevNode.next.next;
    this.length -= 1;
  }

  getNodeValues() {
    const values = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }

    return values;
  }
}

module.exports = { LinkedList, ListNode };
