function partition(list, lower, higher) {
  const pivot = list[Math.floor(Math.random(higher - lower + 1) + lower)];

  while (lower <= higher) {
    while (list[lower] < pivot) {
      lower += 1;
    }

    while (list[higher] > pivot) {
      higher -= 1;
    }

    if (lower <= higher) {
      [list[lower], list[higher]] = [list[higher], list[lower]];

      lower += 1;
      higher -= 1;
    }
  }

  return lower;
}

function quickSort(list, lower = 0, higher = list.length - 1) {
  if (list.length < 2) return list;

  const pivot = partition(list, lower, higher);

  if (lower < pivot - 1) {
    quickSort(list, lower, pivot - 1);
  }

  if (higher > pivot) {
    quickSort(list, pivot, higher);
  }

  return list;
}

module.exports = quickSort;
