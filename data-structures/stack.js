class Stack {
  constructor() {
    this.data = [];
    this.topIndex = null;
  }

  push(item) {
    this.data.push(item);

    if (this.topIndex !== null) {
      this.topIndex += 1;
    } else {
      this.topIndex = 0;
    }
  }

  pop() {
    if (this.topIndex === null) return null;

    this.data.pop();

    if (this.topIndex > 0) {
      this.topIndex -= 1;
    } else {
      this.topIndex = null;
    }
  }

  peek() {
    return this.data[this.topIndex];
  }

  isEmpty() {
    if (this.topIndex === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
