const mergeSort = require('../../algorithms/mergeSort');

describe('Merge Sort', () => {
  test('it returns sorted array from unsorted one', () => {
    expect(mergeSort([7, 3, 0, 8])).toEqual([0, 3, 7, 8]);
  });

  test('it returns sorted array from unsorted one including negative values', () => {
    expect(mergeSort([7, -3, 0, -8])).toEqual([-8, -3, 0, 7]);
  });

  test('it returns sorted array from unsorted one including repeated values', () => {
    expect(mergeSort([7, 7, 0, 2, -8, 81])).toEqual([-8, 0, 2, 7, 7, 81]);
  });

  test('it returns empty array from empty input', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('it returns array with 1 value from 1 value array input', () => {
    expect(mergeSort([2])).toEqual([2]);
  });
});
