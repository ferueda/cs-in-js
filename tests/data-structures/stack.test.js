const { describe, test, expect, beforeEach } = require('@jest/globals');
const Stack = require('../../data-structures/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('it should be instance of Stack and be empty', () => {
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.data).toHaveLength(0);
    expect(stack.topIndex).toBeNull();
  });

  describe('adding items', () => {
    test('pushing items should add them to the top', () => {
      const item1 = 5;
      const item2 = 'test';

      stack.push(item1);

      expect(stack.data).toHaveLength(1);
      expect(stack.topIndex).toBe(0);
      expect(stack.data[stack.topIndex]).toBe(item1);

      stack.push(item2);

      expect(stack.data).toHaveLength(2);
      expect(stack.topIndex).toBe(1);
      expect(stack.data[stack.topIndex]).toBe(item2);
    });
  });

  describe('removing items', () => {
    test('removing items should remove them from the top', () => {
      const item1 = 5;
      const item2 = 'test';
      const item3 = true;
      stack.push(item1);
      stack.push(item2);
      stack.push(item3);

      expect(stack.data).toHaveLength(3);
      expect(stack.topIndex).toBe(2);
      expect(stack.data[stack.topIndex]).toBe(item3);

      stack.pop();
      expect(stack.data).toHaveLength(2);
      expect(stack.topIndex).toBe(1);
      expect(stack.data[stack.topIndex]).toBe(item2);

      stack.pop();
      expect(stack.data).toHaveLength(1);
      expect(stack.topIndex).toBe(0);
      expect(stack.data[stack.topIndex]).toBe(item1);

      stack.pop();
      expect(stack.data).toHaveLength(0);
      expect(stack.topIndex).toBeNull();
    });

    test('removing items from an empty stack should return null', () => {
      expect(stack.data).toHaveLength(0);

      const returnedValue = stack.pop();

      expect(stack.data).toHaveLength(0);
      expect(stack.topIndex).toBeNull();
      expect(returnedValue).toBeNull();
    });
  });

  describe('peek()', () => {
    test('if stack is empty, it should return undefined', () => {
      expect(stack.peek()).toBeUndefined();

      const item1 = 5;

      stack.push(item1);
      expect(stack.peek()).not.toBeUndefined();

      stack.pop();
      expect(stack.peek()).toBeUndefined();
    });

    test('it should return the topmost item', () => {
      const item1 = 5;
      const item2 = 'test';

      stack.push(item1);
      expect(stack.peek()).toBe(item1);

      stack.push(item2);
      expect(stack.peek()).toBe(item2);

      stack.pop();
      expect(stack.peek()).toBe(item1);

      stack.pop();
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe('isEmpty()', () => {
    test('it should return true with empty stack', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    test('it should return false when stack is not empty', () => {
      const item1 = 5;
      stack.push(item1);

      expect(stack.isEmpty()).toBe(false);
    });

    test('it should return true after removing all items', () => {
      const item1 = 5;
      const item2 = 'test';

      expect(stack.isEmpty()).toBe(true);

      stack.push(item1);
      expect(stack.isEmpty()).toBe(false);

      stack.push(item2);
      expect(stack.isEmpty()).toBe(false);

      stack.pop();
      expect(stack.isEmpty()).toBe(false);

      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });
  });
});
