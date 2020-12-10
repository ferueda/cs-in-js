const { describe, test, expect, beforeEach } = require('@jest/globals');
const { LinkedList, ListNode } = require('../../data-structures/linkedList');

describe('Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('it should be instance of LinkedList and be empty', () => {
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
    expect(list.getNodeValues()).toHaveLength(0);
  });

  describe('getNodeValues()', () => {
    test('should return the right values', () => {
      const node1 = new ListNode(1);
      const node2 = new ListNode(2);
      const node3 = new ListNode(3);

      list.head = node1;
      list.head.next = node2;
      list.head.next.next = node3;
      list.tail = node3;

      expect(list.getNodeValues()).toEqual([1, 2, 3]);
    });
  });

  describe('insert()', () => {
    test('should insert a number when one is inserted', () => {
      list.insert(5);
      expect(list.head).toBeInstanceOf(ListNode);
      expect(list.tail).toBeInstanceOf(ListNode);
      expect(list.length).toBe(1);
      expect(list.head.next).toBeNull();
      expect(list.tail.next).toBeNull();
      expect(list.getNodeValues()).toHaveLength(1);
      expect(list.getNodeValues()).toContain(5);
    });

    test('should insert a word when one is inserted', () => {
      list.insert('test');
      expect(list.head).toBeInstanceOf(ListNode);
      expect(list.tail).toBeInstanceOf(ListNode);
      expect(list.length).toBe(1);
      expect(list.head.next).toBeNull();
      expect(list.tail.next).toBeNull();
      expect(list.getNodeValues()).toHaveLength(1);
      expect(list.getNodeValues()).toContain('test');
    });

    test('should insert multiple elements when multiple elements are inserted', () => {
      list.insert(5);
      list.insert('test');

      expect(list.length).toBe(2);
      expect(list.head).not.toEqual(list.tail);
      expect(list.head.next).not.toBeNull();
      expect(list.head.next).toEqual(list.tail);
      expect(list.tail.next).toBeNull();
      expect(list.getNodeValues()).toHaveLength(2);
      expect(list.getNodeValues()).toContain(5);
      expect(list.getNodeValues()).toContain('test');
    });

    test('should insert new head when called with index at 0', () => {
      list.insert(5);
      list.insert('test', 0);

      expect(list.length).toBe(2);
      expect(list.head.data).toBe('test');
      expect(list.tail.data).toBe(5);
      expect(list.getNodeValues()).toEqual(['test', 5]);
    });

    test('should insert new head when called with index in between', () => {
      list.insert(5);
      list.insert(0);
      list.insert('test', 1);

      expect(list.length).toBe(3);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe('test');
      expect(list.tail.data).toBe(0);
      expect(list.tail.next).toBeNull();
      expect(list.getNodeValues()).toEqual([5, 'test', 0]);
    });

    test('should return null when index < 0 or > length', () => {
      const returned = list.insert(5, 1);

      expect(returned).toBeNull();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.length).toBe(0);
      expect(list.getNodeValues()).toHaveLength(0);
    });
  });

  describe('delete()', () => {
    test('should delete element when one is deleted', () => {
      list.insert(5);
      list.delete(0);

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.length).toBe(0);
      expect(list.getNodeValues()).toHaveLength(0);
    });

    test('should delete multiple elements when multiple are deleted', () => {
      list.insert(5);
      list.insert('test');
      list.insert(0);
      list.delete(0);
      list.delete(1);

      expect(list.length).toBe(1);
      expect(list.getNodeValues()).toHaveLength(1);
      expect(list.head.data).toBe('test');
      expect(list.tail.data).toBe('test');
      expect(list.head.next).toBeNull();
      expect(list.tail.next).toBeNull();
    });

    test('should delete head when called at index 0', () => {
      list.insert(5);
      list.insert('test');
      list.delete(0);

      expect(list.length).toBe(1);
      expect(list.getNodeValues()).toHaveLength(1);
      expect(list.head.data).toBe('test');
      expect(list.tail.data).toBe('test');
      expect(list.head.next).toBeNull();
      expect(list.tail.next).toBeNull();
    });

    test('should delete tail when called at index length', () => {
      list.insert('test');
      list.insert(5);
      list.delete(1);

      expect(list.length).toBe(1);
      expect(list.getNodeValues()).toHaveLength(1);
      expect(list.head.data).toBe('test');
      expect(list.tail.data).toBe('test');
      expect(list.head.next).toBeNull();
      expect(list.tail.next).toBeNull();
    });

    test('should return null when index < 0 or > length', () => {
      list.insert('test');
      const returned = list.delete(3);

      expect(returned).toBeNull();
      expect(list.head.data).toBe('test');
      expect(list.tail.data).toBe('test');
      expect(list.length).toBe(1);
      expect(list.getNodeValues()).toHaveLength(1);
    });
  });

  describe('getIndexOf()', () => {
    test('should return index of value given', () => {
      list.insert(0);
      list.insert('test');

      expect(list.getIndexOf(0)).toBe(0);
      expect(list.getIndexOf('test')).toBe(1);
    });

    test('should return undefined for value not found', () => {
      expect(list.getIndexOf(2)).toBeUndefined();

      list.insert(5);
      list.insert('test');

      expect(list.getIndexOf(2)).toBeUndefined();
    });

    test('should return index of first found if element is repeated', () => {
      list.insert(5);
      list.insert('test');
      list.insert('test');

      expect(list.getIndexOf('test')).toBe(1);
    });
  });

  describe('getAt()', () => {
    test('should return element at the right index', () => {
      list.insert(5);
      list.insert('test');

      expect(list.getAt(0).data).toBe(5);
      expect(list.getAt(1).data).toBe('test');
    });

    test('should return undefined if index < 0 or > length', () => {
      list.insert(5);
      list.insert('test');

      expect(list.getAt(-1)).toBeUndefined();
      expect(list.getAt(4)).toBeUndefined();
    });
  });
});
