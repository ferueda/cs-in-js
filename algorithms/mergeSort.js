function mergeSort(list) {
  const len = list.length;

  if (len <= 1) return list;

  const mid = Math.floor(len / 2);

  const left = mergeSort(list.slice(0, mid));
  const right = mergeSort(list.slice(mid));

  const output = [];

  let leftCounter = 0;
  let rightCounter = 0;

  while (leftCounter < left.length && rightCounter < right.length) {
    if (left[leftCounter] < right[rightCounter]) {
      output.push(left[leftCounter]);
      leftCounter += 1;
    } else {
      output.push(right[rightCounter]);
      rightCounter += 1;
    }
  }

  return output.concat(left.slice(leftCounter)).concat(right.slice(rightCounter));
}

module.exports = mergeSort;
