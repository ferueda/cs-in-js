function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let mid, guess;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    }

    if (guess < item) {
      low = mid + 1;
    }
  }

  return null;
}

module.exports = binarySearch;
