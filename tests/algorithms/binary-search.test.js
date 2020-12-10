const { describe, test, expect } = require('@jest/globals');
const binarySearch = require('../../algorithms/binary-search');

describe('Binary Search', () => {
  test('should return', () => {
    const listA = [1, 2, 3, 4, 5];
    const listB = ['a', 'b', 'c', 'd', 'e'];

    expect(binarySearch(listA, 4)).toBeDefined();
    expect(binarySearch(listB, 'a')).toBeDefined();
  });

  test('item not in list should return null', () => {
    const listA = [1, 2, 3];
    const listB = ['a', 'b', 'c'];

    expect(binarySearch(listA, 5)).toBe(null);
    expect(binarySearch(listB, 'z')).toBe(null);
  });

  test('sorted list of numbers should return the right index', () => {
    const list = [1, 2, 3];

    expect(binarySearch(list, 1)).toBe(0);
    expect(binarySearch(list, 2)).toBe(1);
    expect(binarySearch(list, 3)).toBe(2);
  });

  test('sorted list of letters should return the right index', () => {
    const list = ['a', 'b', 'c'];

    expect(binarySearch(list, 'a')).toBe(0);
    expect(binarySearch(list, 'b')).toBe(1);
    expect(binarySearch(list, 'c')).toBe(2);
  });
});
