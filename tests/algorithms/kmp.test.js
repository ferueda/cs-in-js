const { describe, test, expect } = require('@jest/globals');
const { makeLpsArray, kmp } = require('../../algorithms/kmp');

describe('makeLpsArray()', () => {
  test('empty string should return empty array', () => {
    expect(makeLpsArray('')).toEqual([]);
  });

  test('table should have the same length as the input', () => {
    expect(makeLpsArray('test')).toHaveLength(4);
  });

  test('each pattern should return the right output array', () => {
    const input1 = 'AAAA';
    const input2 = 'ABCDE';
    const input3 = 'AABAACAABAA';
    const input4 = 'AAACAAAAAC';
    const input5 = 'AAABAAA';

    expect(makeLpsArray(input1)).toEqual([0, 1, 2, 3]);
    expect(makeLpsArray(input2)).toEqual([0, 0, 0, 0, 0]);
    expect(makeLpsArray(input3)).toEqual([0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]);
    expect(makeLpsArray(input4)).toEqual([0, 1, 2, 0, 1, 2, 3, 3, 3, 4]);
    expect(makeLpsArray(input5)).toEqual([0, 1, 2, 0, 1, 2, 3]);
  });
});

describe('KMP (Knuth–Morris–Pratt)', () => {
  test('empty pattern should return []', () => {
    expect(kmp('test', '')).toEqual([]);
  });

  test('empty text should return []', () => {
    expect(kmp('', 'as')).toEqual([]);
  });

  test('same length text and input should return [0]', () => {
    expect(kmp('test', 'test')).toEqual([0]);
  });

  test('should return the right output for each input', () => {
    expect(kmp('hello', 'll')).toEqual([2]);
    expect(kmp('helloll', 'll')).toEqual([2, 5]);
    expect(kmp('aaa', 'a')).toEqual([0, 1, 2]);
    expect(kmp('aaa', 'bba')).toEqual([]);
    expect(kmp('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
    expect(kmp('this is a test text', 'test')).toEqual([10]);
  });
});
