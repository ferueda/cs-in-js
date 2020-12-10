const { describe, test, expect } = require('@jest/globals');
const selectionSort = require('../../algorithms/selectionSort');

describe('Selection Sort', () => {
  test('should return', () => {
    const list = [4, 2, 1];

    const sortedList = selectionSort(list);

    expect(sortedList).toBeDefined();
    expect(sortedList).toHaveLength(list.length);
    sortedList.forEach((element) => expect(list).toContain(element));
  });

  test('unsorted list as input should return sorted list', () => {
    const listA = [4379, 6, 0, -44, 2, -2342];
    const listB = [-7, -1, -9, -44, -2];
    const listC = [5, 4, 3, 2, 1, 0];

    expect(selectionSort(listA)).toEqual([-2342, -44, 0, 2, 6, 4379]);
    expect(selectionSort(listB)).toEqual([-44, -9, -7, -2, -1]);
    expect(selectionSort(listC)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('sorted list as input should return the same sorted list', () => {
    const listA = [-12, -5, 0, 2, 3, 5];
    const listB = [-4000, -5, -3, -2, -1, 0];
    const listC = [0, 1, 2, 3, 4, 5];

    expect(selectionSort(listA)).toEqual(listA);
    expect(selectionSort(listB)).toEqual(listB);
    expect(selectionSort(listC)).toEqual(listC);
  });

  test('should work when a number is repeated in the input list', () => {
    listA = [5, 3, 7, 4, 4, 1, 5, 0];
    listB = [-6, -3, 0, -6, 0, -2, -1];

    expect(selectionSort(listA)).toEqual([0, 1, 3, 4, 4, 5, 5, 7]);
    expect(selectionSort(listB)).toEqual([-6, -6, -3, -2, -1, 0, 0]);
  });
});
